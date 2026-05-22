import ReactMarkdown from 'react-markdown'
import { cn } from '@/lib/cn'
import type { ChatMessage } from '@/data/types/naraebot'

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
          'max-w-[80%] rounded-sm px-5 py-3 text-sm',
          isUser ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'
        )}
      >
        {/* 대기중인 상태인 경우 / AI에서 전달된 답변 메시지 노출 */}
        {isPending ? (
          <TypingDots />
        ) : (
          <ReactMarkdown
            components={{
              // 링크: 새 탭으로 열기 + 밑줄 스타일
              a: (props) => (
                <a
                  href={props.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={cn(
                    'font-medium underline underline-offset-2',
                    isUser
                      ? 'text-blue-300 hover:text-blue-200'
                      : 'text-blue-600 hover:text-blue-800'
                  )}
                >
                  {props.children}
                </a>
              ),
              // 문단: 줄바꿈 간격
              p: (props) => (
                <p className='mb-2 leading-relaxed last:mb-0'>
                  {props.children}
                </p>
              ),
              // 불릿 리스트 (JD 분석 응답용)
              ul: (props) => (
                <ul className='my-2 ml-4 list-disc space-y-1'>
                  {props.children}
                </ul>
              ),
              // 리스트 항목
              li: (props) => (
                <li className='leading-relaxed'>{props.children}</li>
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
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
