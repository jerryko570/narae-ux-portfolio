'use client'

import { VariantProps } from 'class-variance-authority'
import { CardVariant } from './Card.variants'
import Text from '../Text/Text'
import { cn } from '@/lib/cn'
import CountUp from 'react-countup'
import { useVisible } from '@/hooks/useVisible'
import { parseValue } from '@/utils/parseValue'

type StatItem = {
  value: string
  label: string
  goal?: string
  insight?: string
}

type StatSectionProps = {
  description?: string
  items: StatItem[]
  className?: string
  animated?: boolean
} & VariantProps<typeof CardVariant>

function StatItem({
  value,
  label,
  goal,
  insight,
  started,
  animated,
}: Partial<StatItem> & { started: boolean; animated: boolean }) {
  const { num, suffix } = parseValue(value ?? '')
  const hasNumber = value?.match(/\d/)

  return (
    <div className='text-center'>
      <Text as='h2' className='text-orange-500'>
        {hasNumber ? (
          animated && started ? (
            <CountUp start={0} end={num} duration={1.2} suffix={suffix} />
          ) : (
            `${num}${suffix}`
          )
        ) : (
          value
        )}
      </Text>
      {label && (
        <Text as='p' className='mt-2 font-light text-gray-400'>
          {label}
        </Text>
      )}
      {goal && (
        <Text as='p' className='mt-2 text-gray-400'>
          {goal}
        </Text>
      )}
      {insight && (
        <Text as='p' className='mt-2 text-gray-400'>
          {insight}
        </Text>
      )}
    </div>
  )
}

export default function StatSection({
  items,
  theme,
  className,
  animated = true,
}: StatSectionProps) {
  const { ref, started } = useVisible(0.3)

  return (
    <div
      ref={animated ? ref : undefined}
      className={cn(
        CardVariant({ theme }),
        'flex flex-col items-center',
        className
      )}
    >
      <div className='grid grid-cols-3 gap-40'>
        {items.map((item) => (
          <StatItem
            key={item.label}
            {...item}
            started={started}
            animated={animated}
          />
        ))}
      </div>
    </div>
  )
}
