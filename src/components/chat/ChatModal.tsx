'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { useNavigation } from '@/context/navigation'
import { useEscapeKey } from '@/hooks/useEscapeKey'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { useAutoScroll } from '@/hooks/useAutoScroll'
import Text from '@/components/ui/Text/Text'
import MessageList from './MessageList'
import InputBox from './InputBox'
import SuggestedQuestions from './SuggestedQuestions'
import type { ChatMessage } from '@/data/types/naraebot'

export default function ChatModal() {
  // Provider의 보관함에서 챗봇 열림/닫힘 값과 그걸 바꾸는 함수 꺼내옴
  const { isChatOpen, setIsChatOpen } = useNavigation()
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false) // 봇이 답변 생성 중인지
  const messagesEndRef = useAutoScroll(messages)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const close = () => setIsChatOpen(false)
  useEscapeKey(close, isChatOpen)
  useLockBodyScroll(isChatOpen)

  if (!isChatOpen) return null

  const handleSend = async () => {
    // 빈 입력이거나 답변 생성 중이면 무시
    if (!input.trim() || isStreaming) return

    // 1. 사용자 메시지 추가
    const userMsg: ChatMessage = { role: 'user', content: input }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setIsStreaming(true)
    inputRef.current?.focus()

    // 2. 빈 봇 메시지 placeholder 추가 (스트리밍으로 채워질 자리)
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

    try {
      // 3. 세션 ID 생성/복원 (Supabase 추적용)
      let sessionId = sessionStorage.getItem('narabot_session_id')
      if (!sessionId) {
        sessionId = crypto.randomUUID()
        sessionStorage.setItem('narabot_session_id', sessionId)
      }

      // 4. SSE 스트리밍 API 호출
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          sessionId,
        }),
      })

      if (!res.body) throw new Error('No response body')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      // 5. 스트림을 한 청크씩 읽으면서 마지막 봇 메시지에 누적
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

            // 텍스트 청크: 마지막 봇 메시지에 한 글자씩 추가
            if (parsed.chunk) {
              setMessages((prev) => {
                const next = [...prev]
                const last = next[next.length - 1]
                next[next.length - 1] = {
                  ...last,
                  content: last.content + parsed.chunk,
                }
                return next
              })
            }

            // 완료 신호
            if (parsed.done) {
              setIsStreaming(false)
            }
          } catch (e) {
            console.error('SSE parse error:', e)
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error)
      // 에러 발생 시 placeholder를 에러 메시지로 교체
      setMessages((prev) => {
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

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4'
      onClick={close}
      role='dialog'
      aria-modal='true'
      aria-labelledby='chat-modal-title'
    >
      <div
        className='relative w-full max-w-200 rounded-4xl bg-gray-900 p-8'
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Image
              src='/images/profile.png'
              alt='나래봇 아바타'
              width={40}
              height={40}
              className='rounded-full'
            />
            <Text as='h2' className='text-lg font-medium text-white'>
              <span id='chat-modal-title'>
                저에 대해 궁금한 점을 물어보세요
              </span>
            </Text>
          </div>
          <button
            onClick={close}
            className='text-white hover:opacity-70'
            aria-label='나래봇 닫기'
          >
            <Text as='p' className='cursor-pointer text-sm font-medium'>
              X 닫기
            </Text>
          </button>
        </div>

        {/* 채팅 영역 */}
        <div className='mt-6 flex h-120 flex-col overflow-hidden bg-white'>
          <div className='flex-1 overflow-y-auto p-8'>
            <MessageList messages={messages} messagesEndRef={messagesEndRef} />
          </div>
          <InputBox
            value={input}
            onChange={setInput}
            onSend={handleSend}
            inputRef={inputRef}
            disabled={isStreaming}
          />
        </div>

        {/* 추천 질문 */}
        <SuggestedQuestions onSelect={handleSuggestionClick} />
      </div>
    </div>
  )
}
