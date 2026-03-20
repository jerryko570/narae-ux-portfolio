'use client'

import Image from 'next/image'

type HeroImageProps = {
  src: string
  imageWidth?: string
  right?: number
}

export default function HeroImage({
  src,
  imageWidth = '720px',
  right = 20,
}: HeroImageProps) {
  return (
    <div
      className='absolute'
      style={{
        top: '200px',
        right: `${right}px`,
        width: imageWidth,
      }}
    >
      <Image
        src={src}
        alt='smols 앱 목업'
        width={700}
        height={608}
        className='w-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]'
      />
    </div>
  )
}
