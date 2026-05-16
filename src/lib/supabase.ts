import { createClient } from '@supabase/supabase-js'
import type { Persona } from '@/data/types/naraebot'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // 서버사이드 전용
)

interface SaveConversationInput {
  sessionId: string
  persona?: Persona
  ipHash?: string
  userAgent?: string
}

export async function getOrCreateConversation(
  input: SaveConversationInput
): Promise<string> {
  // 기존 세션이 있는지 확인
  const { data: existing } = await supabase
    .from('conversations')
    .select('id')
    .eq('session_id', input.sessionId)
    .is('ended_at', null)
    .single()

  if (existing) return existing.id

  // 새 대화 생성
  const { data, error } = await supabase
    .from('conversations')
    .insert({
      session_id: input.sessionId,
      persona: input.persona,
      ip_hash: input.ipHash,
      user_agent: input.userAgent,
    })
    .select('id')
    .single()

  if (error) throw error
  return data!.id
}

interface SaveMessagePairInput {
  conversationId: string
  userMessage: string
  assistantMessage: string
  isJdAnalysis: boolean
  inputTokens: number
  outputTokens: number
  cacheReadTokens: number
  costUsd: number
  latencyMs: number
}

export async function saveMessagePair(input: SaveMessagePairInput) {
  // 사용자 메시지
  await supabase.from('messages').insert([
    {
      conversation_id: input.conversationId,
      role: 'user',
      content: input.userMessage,
    },
    {
      conversation_id: input.conversationId,
      role: 'assistant',
      content: input.assistantMessage,
      is_jd_analysis: input.isJdAnalysis,
      model_used: 'claude-haiku-4-5',
      input_tokens: input.inputTokens,
      output_tokens: input.outputTokens,
      cache_read_tokens: input.cacheReadTokens,
      cost_usd: input.costUsd,
      latency_ms: input.latencyMs,
    },
  ])
}

export async function saveFeedback(
  messageId: string,
  rating: 1 | -1,
  comment?: string
) {
  const { error } = await supabase
    .from('feedback')
    .insert({ message_id: messageId, rating, comment })
  if (error) throw error
}
