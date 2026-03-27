import Image from 'next/image'

type UserResearchChatSectionProps = {
  className?: string
  image: string
}

export default function UserResearchChatSection({
  className,
  image,
}: UserResearchChatSectionProps) {
  return (
    <section className={`${className} flex flex-1 justify-end pt-12`}>
      <Image
        src={image}
        alt='유저 리서치 채팅'
        width={500}
        height={741}
        className='h-auto'
      />
    </section>
  )
}
