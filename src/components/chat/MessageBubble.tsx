import { cn } from '@/lib/cn'
import Text from '@/components/ui/Text/Text'
import type { ChatMessage } from '@/data/types/naraebot.ts'

interface Props {
  message: ChatMessage
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === 'user'
  // 봇 메시지인데 내용이 아직 비어있음 = 응답 생성 중
  const isPending = !isUser && message.content === ''

  // 유저가 작성한 채팅버블이면 끝에 배치하고 아니면 시작점에 배치
  return (
    <div className={cn('flex', isUser ? 'justify-end' : 'justify-start')}>
      {/* 채팅 버블 디자인 */}
      <div
        className={cn(
          'max-w-[80%] rounded-sm px-5 py-3',
          isUser ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'
        )}
      >
        {/* 대기중인 상태인 경우 / AI에서 전달된 답변 메시지 노출 */}
        {isPending ? (
          <TypingDots />
        ) : (
          <Text as='p' className='text-sm'>
            {message.content}
          </Text>
        )}
      </div>
    </div>
  )
}

function TypingDots() {
  return (
    <span className='flex items-center gap-1.5 py-1'>
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className='h-2 w-2 animate-bounce rounded-full bg-gray-500'
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </span>
  )
}
