// 리서치 도넛차트 svg 컴포넌트

'use client'

import Image from 'next/image'
import { cn } from '@/lib/cn'

type DonutChartProps = {
  src: string
  alt?: string
  size?: number
  className?: string
}

export default function DonutChart({
  src,
  alt = 'donut chart',
  size = 240,
  className,
}: DonutChartProps) {
  return (
    <div
      className={cn('relative shrink-0', className)}
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} fill className='object-contain' />
    </div>
  )
}
