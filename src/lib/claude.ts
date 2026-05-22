import Anthropic from '@anthropic-ai/sdk'
import type { ChatMessage } from '@/data/types/naraebot'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

const MODEL = 'claude-haiku-4-5'

interface StreamRequest {
  systemPrompt: string
  knowledgeBase: string
  jdAnalysisLogic: string
  messages: ChatMessage[]
}

/**
 * Prompt Caching 적용:
 * - 시스템 프롬프트(짧음): 캐싱 X
 * - 지식베이스(큼): 캐싱 ✨ (90% 비용 절감)
 * - JD 분석 로직(큼): 캐싱 ✨
 */
export async function streamChat({
  systemPrompt,
  knowledgeBase,
  jdAnalysisLogic,
  messages,
}: StreamRequest) {
  return client.messages.stream({
    model: MODEL,
    max_tokens: 1024,
    system: [
      {
        type: 'text',
        text: systemPrompt,
      },
      {
        type: 'text',
        text: knowledgeBase,
        cache_control: { type: 'ephemeral' }, // ✨ 5분 캐시
      },
      {
        type: 'text',
        text: jdAnalysisLogic,
        cache_control: { type: 'ephemeral' }, // ✨ 5분 캐시
      },
    ],
    messages: messages.map((m) => ({
      role: m.role,
      content: m.content,
    })),
  })
}

/**
 * 비용 계산 (Haiku 4.5 기준, 2026.05)
 * - 입력 (캐시 미스): $1.00 / 1M tokens
 * - 입력 (캐시 히트): $0.10 / 1M tokens
 * - 출력: $5.00 / 1M tokens
 */
export function calculateCost(
  inputTokens: number,
  cacheReadTokens: number,
  outputTokens: number
): number {
  const inputCost = (inputTokens - cacheReadTokens) * (1.0 / 1_000_000)
  const cacheCost = cacheReadTokens * (0.1 / 1_000_000)
  const outputCost = outputTokens * (5.0 / 1_000_000)
  return inputCost + cacheCost + outputCost
}
