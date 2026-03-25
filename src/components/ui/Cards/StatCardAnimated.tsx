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

type StatCardProps = {
  description: string
  items: StatItem[]
  className?: string
} & VariantProps<typeof CardVariant>

function AnimatedStatItem({
  value,
  label,
  goal,
  insight,
  started,
}: StatItem & { started: boolean }) {
  const { num, suffix } = parseValue(value)

  return (
    <div className='text-center'>
      <Text as='h1' className='text-orange-500'>
        {started ? (
          <CountUp start={0} end={num} duration={1.2} suffix={suffix} />
        ) : (
          `0${suffix}`
        )}
      </Text>
      <Text as='h6' className='mt-4 font-light'>
        {label}
      </Text>
      <Text as='p' className='mt-2 text-gray-400'>
        {goal}
      </Text>
      <Text as='p' className='mt-2 text-gray-400'>
        {insight}
      </Text>
    </div>
  )
}

export default function StatCardAnimated({
  description,
  items,
  theme,
  className,
}: StatCardProps) {
  const { ref, started } = useVisible(0.3)

  return (
    <div
      ref={ref}
      className={cn(
        CardVariant({ theme }),
        'flex flex-col items-center',
        className
      )}
    >
      <Text as='h6' className='text-center text-white'>
        {description}
      </Text>
      <div className='mt-12 grid grid-cols-3 gap-40'>
        {items.map((item) => (
          <AnimatedStatItem key={item.label} {...item} started={started} />
        ))}
      </div>
    </div>
  )
}
