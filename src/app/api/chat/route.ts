import { NextRequest } from 'next/server'
import { streamChat, calculateCost } from '@/lib/claude'
import { loadAllPrompts } from '@/lib/system-prompt'
import { getOrCreateConversation, saveMessagePair } from '@/lib/supabase'
import { isJdInput } from '@/lib/jd-detector'
import crypto from 'crypto'

export const runtime = 'nodejs' // edge가 아닌 nodejs runtime (fs 접근 위해)
export const maxDuration = 30

export async function POST(req: NextRequest) {
  try {
    const { messages, sessionId, persona } = await req.json()

    // 입력 검증
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: 'Invalid messages' }, { status: 400 })
    }
    if (!sessionId) {
      return Response.json({ error: 'Missing sessionId' }, { status: 400 })
    }

    const userMessage = messages[messages.length - 1].content
    const isJd = isJdInput(userMessage)
    const startTime = Date.now()

    // IP 해시 (개인정보 보호)
    const ip = req.headers.get('x-forwarded-for') || 'unknown'
    const ipHash = crypto
      .createHash('sha256')
      .update(ip)
      .digest('hex')
      .slice(0, 16)

    // 대화 세션 ID 조회/생성 (백그라운드로 시작)
    const convIdPromise = getOrCreateConversation({
      sessionId,
      persona,
      ipHash,
      userAgent: req.headers.get('user-agent') || undefined,
    })

    // 프롬프트 로드 (메모리 캐시)
    const prompts = await loadAllPrompts()

    // Claude 스트리밍 호출
    const stream = await streamChat({
      systemPrompt: prompts.systemPrompt,
      knowledgeBase: prompts.knowledgeBase,
      jdAnalysisLogic: prompts.jdAnalysisLogic,
      messages,
    })

    // SSE 응답 스트림 생성
    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        let fullResponse = ''
        let inputTokens = 0
        let outputTokens = 0
        let cacheReadTokens = 0

        try {
          for await (const event of stream) {
            // 텍스트 청크 전송
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
            // 토큰 사용량
            if (event.type === 'message_start' && event.message?.usage) {
              inputTokens = event.message.usage.input_tokens || 0
              cacheReadTokens = event.message.usage.cache_read_input_tokens || 0
            }
            if (event.type === 'message_delta' && event.usage) {
              outputTokens = event.usage.output_tokens || 0
            }
          }

          // 응답 완료 신호
          const latencyMs = Date.now() - startTime
          const cost = calculateCost(inputTokens, cacheReadTokens, outputTokens)

          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ done: true, latencyMs })}\n\n`
            )
          )
          controller.close()

          // 비동기 저장 (fire-and-forget, 실패해도 사용자엔 영향 X)
          convIdPromise
            .then((conversationId) =>
              saveMessagePair({
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
            )
            .catch((err) => console.error('Supabase save failed:', err))
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
