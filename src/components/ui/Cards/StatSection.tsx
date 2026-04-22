'use client'

import { VariantProps } from 'class-variance-authority'
import CountUp from 'react-countup'
import { CardVariant } from './Card.variants'
import Text from '../Text/Text'
import { cn } from '@/lib/cn'
import { useVisible } from '@/hooks/useVisible'
import { parseValue } from '@/utils/parseValue'

type StatItem = {
  value: string
  label: string
  description?: string
}

type StatSectionProps = {
  items: StatItem[]
  className?: string
  animated?: boolean
  layout?: 'stack' | 'split'
} & VariantProps<typeof CardVariant>

type ItemInnerProps = StatItem & {
  started: boolean
  animated: boolean
}

/* ---------- 공통: 숫자 렌더링 ---------- */
function StatValue({
  value,
  started,
  animated,
  className,
}: {
  value: string
  started: boolean
  animated: boolean
  className?: string
}) {
  const { num, suffix } = parseValue(value)
  const hasNumber = /\d/.test(value)

  return (
    <Text as='h2' className={cn('leading-none text-orange-500', className)}>
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
  )
}

/* ---------- stack: 세로 리스트 ---------- */
function StackItem({
  value,
  label,
  description,
  started,
  animated,
}: ItemInnerProps) {
  return (
    <div className='flex items-center justify-between gap-8 border-t border-white/5 py-8 first:border-t-0 first:pt-0 last:pb-0'>
      <div className='flex flex-col gap-3'>
        <Text as='caption' className='text-gray-500'>
          {label}
        </Text>
        <StatValue
          value={value}
          started={started}
          animated={animated}
          className='text-5xl font-bold'
        />
      </div>

      {description && (
        <Text as='p' className='text-right whitespace-pre-line text-white'>
          {description}
        </Text>
      )}
    </div>
  )
}

/* ---------- split: 가로 리스트 ---------- */
function SplitItem({
  value,
  label,
  description,
  started,
  animated,
}: ItemInnerProps) {
  return (
    <div className='flex flex-1 flex-col items-center text-center'>
      <StatValue value={value} started={started} animated={animated} />
      <Text as='p' className='font-light text-gray-400'>
        {label}
      </Text>
      {description && (
        <Text as='p' className='mt-1 whitespace-pre-line text-gray-500'>
          {description}
        </Text>
      )}
    </div>
  )
}

/* ---------- Main ---------- */
export default function StatSection({
  items,
  theme,
  className,
  animated = true,
  layout = 'stack',
}: StatSectionProps) {
  const { ref, started } = useVisible(0.3)
  const isSplit = layout === 'split'
  const Item = isSplit ? SplitItem : StackItem

  return (
    <div
      ref={animated ? ref : undefined}
      className={cn(
        CardVariant({ theme }),
        isSplit ? 'flex w-full' : 'flex flex-col',
        className
      )}
    >
      {items.map((item) => (
        <Item
          key={item.label}
          {...item}
          started={started}
          animated={animated}
        />
      ))}
    </div>
  )
}
