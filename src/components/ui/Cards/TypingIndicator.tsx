export default function TypingIndicator() {
  return (
    <div className='flex w-fit items-center gap-1.5 rounded-2xl bg-gray-600 px-4 py-4'>
      <span className='h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:0ms]' />
      <span className='h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:150ms]' />
      <span className='h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:300ms]' />
    </div>
  )
}
