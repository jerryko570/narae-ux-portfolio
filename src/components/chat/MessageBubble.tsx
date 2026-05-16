import { cn } from '@/lib/cn'
import Text from '@/components/ui/Text/Text'
import type { ChatMessage } from '@/data/types/naraebot.ts'

interface Props {
  message: ChatMessage
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === 'user'

  return (
    <div className={cn('flex', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[80%] rounded-sm px-5 py-3',
          isUser ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'
        )}
      >
        <Text as='p' className='text-sm'>
          {message.content}
        </Text>
      </div>
    </div>
  )
}
