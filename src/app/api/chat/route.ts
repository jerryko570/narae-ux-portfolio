import { NextRequest } from 'next/server'
import { streamChat, calculateCost } from '@/lib/claude'
import { loadAllPrompts } from '@/lib/system-prompt'
import { getOrCreateConversation, saveMessagePair } from '@/lib/supabase'
import { isJdInput } from '@/lib/jd-detector'
import crypto from 'crypto'

export const runtime = 'nodejs'
export const maxDuration = 30

export async function POST(req: NextRequest) {
  try {
    const { messages, sessionId, persona } = await req.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: 'Invalid messages' }, { status: 400 })
    }
    if (!sessionId) {
      return Response.json({ error: 'Missing sessionId' }, { status: 400 })
    }

    // ✅ 맨 끝을 무조건 집지 말고, 진짜 마지막 user 메시지를 찾는다
    const lastUser = [...messages].reverse().find((m) => m.role === 'user')
    const userMessage = lastUser?.content ?? ''

    const isJd = isJdInput(userMessage)
    const startTime = Date.now()

    const ip = req.headers.get('x-forwarded-for') || 'unknown'
    const ipHash = crypto
      .createHash('sha256')
      .update(ip)
      .digest('hex')
      .slice(0, 16)

    const convIdPromise = getOrCreateConversation({
      sessionId,
      persona,
      ipHash,
      userAgent: req.headers.get('user-agent') || undefined,
    }).catch((err) => {
      console.error('Conversation create failed:', err)
      return null
    })

    const prompts = await loadAllPrompts()

    const stream = await streamChat({
      systemPrompt: prompts.systemPrompt,
      knowledgeBase: prompts.knowledgeBase,
      jdAnalysisLogic: prompts.jdAnalysisLogic,
      messages,
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        let fullResponse = ''
        let inputTokens = 0
        let outputTokens = 0
        let cacheReadTokens = 0

        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              const chunk = event.delta.text
              fullResponse += chunk
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ chunk })}\n\n`)
              )
            }
            if (event.type === 'message_start' && event.message?.usage) {
              inputTokens = event.message.usage.input_tokens || 0
              cacheReadTokens = event.message.usage.cache_read_input_tokens || 0
            }
            if (event.type === 'message_delta' && event.usage) {
              outputTokens = event.usage.output_tokens || 0
            }
          }

          const latencyMs = Date.now() - startTime
          const cost = calculateCost(inputTokens, cacheReadTokens, outputTokens)

          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ done: true, latencyMs })}\n\n`
            )
          )

          // ✅ close() 전에 저장을 await로 끝낸다 (서버리스 조기종료 방지)
          try {
            const conversationId = await convIdPromise
            if (conversationId) {
              await saveMessagePair({
                conversationId,
                userMessage,
                assistantMessage: fullResponse,
                isJdAnalysis: isJd,
                inputTokens,
                outputTokens,
                cacheReadTokens,
                costUsd: cost,
                latencyMs,
              })
            }
          } catch (err) {
            console.error('Supabase save failed:', err)
          }

          controller.close()
        } catch (error) {
          console.error('Stream error:', error)
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ error: 'Stream failed' })}\n\n`
            )
          )
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
