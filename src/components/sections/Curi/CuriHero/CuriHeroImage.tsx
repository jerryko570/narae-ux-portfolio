'use client'

import Image from 'next/image'

type HeroImageProps = {
  src: string
  imageWidth?: string
  top?: number
  right?: number
  priority?: boolean
}

export default function HeroImage({
  src,
  imageWidth = '800px',
  right = -30,
  top = 10,
  priority = false,
}: HeroImageProps) {
  return (
    <div
      className='absolute'
      style={{
        top: `${top}px`,
        right: `${right}px`,
        width: imageWidth,
      }}
    >
      <Image
        src={src}
        alt='curi 앱 목업'
        width={600}
        height={508}
        className='w-full'
        priority={priority}
      />
    </div>
  )
}
