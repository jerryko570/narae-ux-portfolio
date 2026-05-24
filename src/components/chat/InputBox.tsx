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
    <div className='m-6 flex items-center gap-2 rounded-full border border-gray-300 bg-gray-100 px-5 py-2 shadow-[0_1px_6px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_2px_10px_rgba(0,0,0,0.18)]'>
      <textarea
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
            e.preventDefault()
            onSend()
          }
        }}
        placeholder='메시지 또는 채용 공고를 입력하세요...'
        autoFocus
        rows={1}
        className='flex-1 resize-none bg-transparent px-2 py-4 text-lg text-gray-900 outline-none placeholder:text-gray-400'
      />
      <Button
        label='전송'
        onClick={onSend}
        size='lg'
        variant='secondary'
        disabled={disabled || !value.trim()}
        className='shrink-0 cursor-pointer rounded-full px-12'
      />
    </div>
  )
}
