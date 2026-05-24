import { RefObject } from 'react'
import MessageBubble from './MessageBubble'
import Text from '@/components/ui/Text/Text'
import type { ChatMessage } from '@/data/types/naraebot.ts'

interface Props {
  messages: ChatMessage[]
  messagesEndRef: RefObject<HTMLDivElement | null>
}

export default function MessageList({ messages, messagesEndRef }: Props) {
  const hasMessages = messages.length > 0

  if (!hasMessages) {
    return (
      <div className='flex h-full items-center justify-center'>
        <div className='flex w-full flex-col items-center gap-4'>
          <div className='pt-2 text-center'>
            <Text as='h1' className='font-bold text-gray-900'>
              🤖
            </Text>
            <Text as='h4' className='pt-2 font-bold text-gray-900'>
              안녕하세요, 나래봇이에요
            </Text>
            <Text as='p' className='font-regular pt-2 text-gray-500'>
              이나래에 대해 무엇이든 물어보세요
            </Text>
          </div>

          <div className='mt-9 w-full rounded-2xl bg-blue-300 p-5'>
            {/* 제목 줄: 아이콘 + 타이틀 (가로 배치) */}
            <div className='flex items-center gap-2'>
              <Text as='p' className='font-bold text-blue-500'>
                👉🏻 채용 공고가 있다면
              </Text>
            </div>

            {/* 설명 */}
            <Text as='p' className='pt-2 text-gray-600'>
              채용 공고를 아래 입력창에 그대로 붙여넣으면, 이나래와 얼마나
              맞는지 분석해드려요
            </Text>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='space-y-3'>
      {messages.map((msg, i) => (
        <MessageBubble key={i} message={msg} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}
