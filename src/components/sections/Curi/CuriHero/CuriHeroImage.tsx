'use client'

import Image from 'next/image'

type HeroImageProps = {
  src: string
  imageWidth?: string
  top?: number
  right?: number
}

export default function HeroImage({
  src,
  imageWidth = '760px',
  right = 0,
  top = 10,
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
      />
    </div>
  )
}
