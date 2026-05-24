import { RefObject } from 'react'
import MessageBubble from './MessageBubble'
import Text from '@/components/ui/Text/Text'
import type { ChatMessage } from '@/data/types/naraebot'

interface Props {
  messages: ChatMessage[]
  messagesEndRef: RefObject<HTMLDivElement | null>
}

// 콜아웃 색상 테마 (배경 / 타이틀 텍스트)
const calloutThemes = {
  blue: { bg: 'bg-blue-200', title: 'text-blue-500' },
  green: { bg: 'bg-emerald-50', title: 'text-emerald-500' },
} as const

type CalloutTheme = keyof typeof calloutThemes

// 웰컴 화면 콜아웃 목록
const callouts: {
  emoji: string
  title: string
  description: string
  theme: CalloutTheme
}[] = [
  {
    emoji: '💬',
    title: '무엇이든 물어보세요',
    description: '경력, 강점, 일하는 방식까지 자유롭게 물어보세요',
    theme: 'blue',
  },
  {
    emoji: '📋',
    title: '채용 공고가 있다면',
    description: 'JD를 그대로 붙여넣으면 적합도를 분석해드려요',
    theme: 'green',
  },
]

export default function MessageList({ messages, messagesEndRef }: Props) {
  const hasMessages = messages.length > 0

  if (!hasMessages) {
    return (
      <div className='flex min-h-full flex-col items-center justify-center'>
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

          {/* 콜아웃 리스트 */}
          <div className='mt-9 flex w-full flex-col gap-3'>
            {callouts.map(({ emoji, title, description, theme }) => {
              const color = calloutThemes[theme]
              return (
                <div key={title} className={`rounded-2xl p-5 ${color.bg}`}>
                  {/* 제목 줄: 아이콘 + 타이틀 */}
                  <div className='flex items-center gap-2'>
                    <Text as='p' className={`font-bold ${color.title}`}>
                      {emoji} {title}
                    </Text>
                  </div>
                  {/* 설명 */}
                  <Text as='p' className='pt-2 text-gray-600'>
                    {description}
                  </Text>
                </div>
              )
            })}
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
