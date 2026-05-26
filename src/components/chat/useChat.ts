'use client'

import posthog from 'posthog-js'
import { useState, useRef } from 'react'
import { useAutoScroll } from '@/hooks/useAutoScroll'
import type { ChatMessage } from '@/data/types/naraebot'

export function useChat(isActive: boolean) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useAutoScroll(messages, isActive)

  // 채팅 초기화: 메인(웰컴) 화면으로 복귀
  const resetChat = () => {
    setMessages([])
    setInput('')
    setIsStreaming(false)
    inputRef.current?.focus()
  }

  const handleSend = async () => {
    if (!input.trim() || isStreaming) return

    posthog.capture('naraebot_message_sent')
    const userMsg: ChatMessage = { role: 'user', content: input }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setIsStreaming(true)
    inputRef.current?.focus()

    // 빈 봇 메시지 placeholder (스트리밍으로 채워질 자리)
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

    try {
      // 세션 ID 생성/복원 (Supabase 추적용)
      let sessionId = sessionStorage.getItem('narabot_session_id')
      if (!sessionId) {
        sessionId = crypto.randomUUID()
        sessionStorage.setItem('narabot_session_id', sessionId)
      }

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, sessionId }),
      })

      if (!res.body) throw new Error('No response body')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      // 스트림을 한 청크씩 읽으면서 마지막 봇 메시지에 누적
      while (true) {
        const { value, done } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6).trim()
          if (!data) continue

          try {
            const parsed = JSON.parse(data)

            if (parsed.chunk) {
              setMessages((prev) => {
                // 스트리밍 중 초기화된 경우 무시 (크래시 방지)
                if (prev.length === 0) return prev
                const next = [...prev]
                const last = next[next.length - 1]
                next[next.length - 1] = {
                  ...last,
                  content: last.content + parsed.chunk,
                }
                return next
              })
            }

            if (parsed.done) setIsStreaming(false)
          } catch (e) {
            console.error('SSE parse error:', e)
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error)
      setMessages((prev) => {
        if (prev.length === 0) return prev
        const next = [...prev]
        next[next.length - 1] = {
          role: 'assistant',
          content:
            '죄송해요, 일시적인 오류가 발생했어요. 잠시 후 다시 시도해 주세요.',
        }
        return next
      })
    } finally {
      setIsStreaming(false)
    }
  }

  const handleSuggestionClick = (question: string) => {
    setInput(question)
    inputRef.current?.focus()
  }

  return {
    messages,
    input,
    setInput,
    isStreaming,
    inputRef,
    messagesEndRef,
    resetChat,
    handleSend,
    handleSuggestionClick,
  }
}
