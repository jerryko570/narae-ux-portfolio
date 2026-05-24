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
  imageWidth = '650px',
  right = -200,
  top = 30,
  priority = false,
}: HeroImageProps) {
  return (
    <div
      className='pointer-events-none absolute z-0'
      style={{
        top: `${top}px`,
        right: `${right}px`,
        width: imageWidth,
      }}
    >
      <Image
        src={src}
        alt='smols 앱 목업'
        width={600}
        height={508}
        className='w-full'
        priority={priority}
      />
    </div>
  )
}
