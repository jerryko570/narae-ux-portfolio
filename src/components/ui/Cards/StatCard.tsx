'use client'

import type { StatCardData } from '@/data/types/smols'
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
  subtitle?: string
  titleClassName?: string
  dataClassName?: string
  titleSize?: 'h4' | 'h5' | 'h6'
  dataSize?: 'h1' | 'h2' | 'h3'
} & VariantProps<typeof CardVariant>

export default function StatCard({
  title,
  data = '',
  theme,
  className,
  animated = true,
  titleClassName,
  dataClassName,
  titleSize = 'h6',
  dataSize = 'h1',
}: StatCardProps) {
  const { ref, started } = useVisible(0.3)
  const { num, suffix } = parseValue(data)
  const hasNumber = data?.match(/\d/)

  return (
    <div
      ref={animated ? ref : undefined}
      className={cn(CardVariant({ theme }), className, 'flex flex-col')}
    >
      <Text as={titleSize} className={cn('text-center', titleClassName)}>
        {title}
      </Text>
      <Text
        as={dataSize}
        className={cn('pt-2 text-center text-orange-500', dataClassName)}
      >
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
    </div>
  )
}
