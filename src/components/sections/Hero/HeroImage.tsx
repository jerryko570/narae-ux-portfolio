'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

type HeroImageProps = {
  src: string
  imageWidth: string
  right: number
}

export default function HeroImage({ src, imageWidth, right }: HeroImageProps) {
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 800], [0, 150])
  const scrollOpacity = useTransform(scrollY, [100, 400], [1, 0])

  return (
    <motion.div
      className='absolute'
      style={{
        top: '340px',
        right: `${right}px`,
        width: imageWidth,
        opacity: scrollOpacity,
        y,
      }}
    >
      <Image
        src={src}
        alt='smols 앱 목업'
        width={700}
        height={608}
        className='w-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]'
      />
    </motion.div>
  )
}
