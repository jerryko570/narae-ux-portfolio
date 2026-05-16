import { RefObject } from 'react'
import MessageBubble from './MessageBubble'
import TypingIndicator from '@/components/ui/Cards/TypingIndicator'
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
        <div className='flex flex-col items-center gap-4'>
          <TypingIndicator />
          <Text as='p' className='text-lg font-light text-gray-900'>
            AI로 무엇이든 시도해 보세요...
          </Text>
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
