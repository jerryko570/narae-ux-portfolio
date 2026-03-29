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
  imageWidth = '750px',
  right = 0,
  top = 190,
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
        alt='smols 앱 목업'
        width={700}
        height={608}
        className='w-full'
      />
    </div>
  )
}
