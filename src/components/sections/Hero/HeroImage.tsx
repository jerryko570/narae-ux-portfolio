'use client'

import Image from 'next/image'

type HeroImageProps = {
  src: string
  imageWidth?: string
  right?: number
}

export default function HeroImage({
  src,
  imageWidth = '750px',
  right = 40,
}: HeroImageProps) {
  return (
    <div
      className='absolute'
      style={{
        top: '160px',
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
