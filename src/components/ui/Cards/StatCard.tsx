'use client'

import type { StatCardData } from '@/data/types'
import Text from '../Text/Text'
import { CardVariant } from './Card.variants'
import { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'
import CountUp from 'react-countup'
import { useVisible } from '@/hooks/useVisible'
import { parseValue } from '@/utils/parseValue'

type StatCardProps = StatCardData & {
  className?: string
} & VariantProps<typeof CardVariant>

export default function StatCard({
  title,
  data,
  subtitle,
  description,
  subdescription,
  theme,
  className,
}: StatCardProps) {
  const { ref, started } = useVisible(0.3)
  const { num, suffix } = parseValue(data)

  return (
    <div
      ref={ref}
      className={cn(
        CardVariant({ theme }),
        className,
        'flex h-full flex-col justify-between'
      )}
    >
      <Text as='h6' className='text-center'>
        {title}
      </Text>
      <Text as='h1' className='pt-12 text-center text-orange-500'>
        {started ? (
          <CountUp start={0} end={num} duration={1.2} suffix={suffix} />
        ) : (
          `0${suffix}`
        )}
      </Text>
      <Text as='h6' className='text-center font-light whitespace-pre-line'>
        {subtitle}
      </Text>
      <Text as='p' className='text-center whitespace-pre-line'>
        {description}
      </Text>
      <Text as='caption' className='pt-8 text-center text-gray-400'>
        {subdescription}
      </Text>
    </div>
  )
}
