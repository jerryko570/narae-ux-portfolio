'use client'

import type { StatCardData } from '@/data/types'
import Text from '../Text/Text'
import { CardVariant } from './Card.variants'
import { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'
import CountUp from 'react-countup'
import { useVisible } from '@/hooks/useVisible'
import { parseValue } from '@/utils/parseValue'

type StatCardProps = Partial<StatCardData> & {
  className?: string
  animated?: boolean
} & VariantProps<typeof CardVariant>

export default function StatCard({
  title,
  data = '',
  subtitle,
  description,
  theme,
  className,
  animated = true,
}: StatCardProps) {
  const { ref, started } = useVisible(0.3)
  const { num, suffix } = parseValue(data)
  const hasNumber = data?.match(/\d/)

  return (
    <div
      ref={animated ? ref : undefined}
      className={cn(CardVariant({ theme }), className, 'flex flex-col')}
    >
      <Text as='h6' className='text-center'>
        {title}
      </Text>
      <Text as='h1' className='pt-4 text-center text-orange-500'>
        {hasNumber ? (
          animated && started ? (
            <CountUp start={0} end={num} duration={1.2} suffix={suffix} />
          ) : (
            `${num}${suffix}`
          )
        ) : (
          data
        )}
      </Text>
      <Text as='h6' className='pt-8 text-center font-light whitespace-pre-line'>
        {subtitle}
      </Text>
      <Text as='p' className='text-center whitespace-pre-line'>
        {description}
      </Text>
    </div>
  )
}
