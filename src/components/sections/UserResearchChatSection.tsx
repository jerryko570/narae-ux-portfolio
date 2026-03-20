import Image from 'next/image'

type UserResearchChatSectionProps = {
  className?: string
}

export default function UserResearchChatSection({
  className,
}: UserResearchChatSectionProps) {
  return (
    <section className={`${className} flex flex-1 justify-end`}>
      <Image
        src='/images/smols-user-research-chat.png'
        alt='유저 리서치 채팅'
        width={500}
        height={741}
        className='h-auto'
      />
    </section>
  )
}
