import { RefObject } from 'react'
import Button from '@/components/ui/Button/Button'

interface Props {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  inputRef: RefObject<HTMLTextAreaElement | null>
  disabled?: boolean
}

export default function InputBox({
  value,
  onChange,
  onSend,
  inputRef,
  disabled,
}: Props) {
  return (
    <div className='flex items-center gap-2 border-t border-gray-200 p-3'>
      <textarea
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          // Enter로 전송. Shift+Enter는 줄바꿈, 한글 조합 중엔 무시
          if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
            e.preventDefault()
            onSend()
          }
        }}
        placeholder='메시지를 입력하세요...'
        autoFocus
        rows={1}
        className='flex-1 resize-none bg-transparent px-3 py-2 text-lg text-gray-900 outline-none placeholder:text-gray-400'
      />
      <Button
        label='전송'
        onClick={onSend}
        size='lg'
        variant='secondary'
        disabled={disabled || !value.trim()}
        className='shrink-0 cursor-pointer rounded-full px-10 py-6'
      />
    </div>
  )
}
