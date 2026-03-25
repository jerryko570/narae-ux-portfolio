'use client'
import Image from 'next/image'
import Text from '../Text/Text'
import { VariantProps } from 'class-variance-authority'
import { CardVariant } from './Card.variants'
import { cn } from '@/lib/cn'

type DonutChartCardProps = {
  title: string
  image: string
  description: string
  className?: string
} & VariantProps<typeof CardVariant>

export default function DonutChartCard({
  title,
  image,
  className,
  theme,
}: DonutChartCardProps) {
  return (
    <div
      className={cn(CardVariant({ theme }), className, 'flex h-full flex-col')}
    >
      <Text as='h6' className='text-center text-white'>
        {title}
      </Text>

      <Image
        src={image}
        alt='chart'
        width={220}
        height={220}
        className='mx-auto h-auto w-90 pt-8'
      />
    </div>
  )
}
