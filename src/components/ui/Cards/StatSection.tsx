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
  valueClassName?: string
  animated?: boolean
  layout?: 'stack' | 'split'
} & VariantProps<typeof CardVariant>

type ItemInnerProps = StatItem & {
  started: boolean
  animated: boolean
  valueClassName?: string
  isDark: boolean
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
    <Text as='h2' className={cn('leading-none', className)}>
      {hasNumber ? (
        animated && started ? (
          <CountUp start={0} end={num} duration={2} suffix={suffix} />
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
  valueClassName,
  isDark,
}: ItemInnerProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-8 border-t py-8 first:border-t-0 first:pt-0 last:pb-0',
        isDark ? 'border-white/5' : 'border-black/5'
      )}
    >
      <div className='flex flex-col gap-3'>
        <Text as='caption' className='font-light opacity-50'>
          {label}
        </Text>
        <StatValue
          value={value}
          started={started}
          animated={animated}
          className={cn('text-5xl font-bold', valueClassName)}
        />
      </div>

      {description && (
        <Text as='p' className='text-right font-light whitespace-pre-line'>
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
  valueClassName,
}: ItemInnerProps) {
  return (
    <div className='flex flex-1 flex-col items-center text-center'>
      <StatValue
        value={value}
        started={started}
        animated={animated}
        className={valueClassName}
      />
      <Text as='p' className='font-light opacity-70'>
        {label}
      </Text>
      {description && (
        <Text as='p' className='mt-1 whitespace-pre-line opacity-60'>
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
  valueClassName,
  animated = true,
  layout = 'stack',
}: StatSectionProps) {
  const { ref, started } = useVisible(0.1)
  const isSplit = layout === 'split'
  const Item = isSplit ? SplitItem : StackItem
  const isDark =
    theme === 'dark' ||
    theme === 'sky' ||
    theme === 'orange' ||
    theme === 'pink'

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
          valueClassName={valueClassName}
          isDark={isDark}
        />
      ))}
    </div>
  )
}
