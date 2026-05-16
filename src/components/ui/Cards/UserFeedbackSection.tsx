'use client'

import Image from 'next/image'
import { VariantProps } from 'class-variance-authority'
import type { FeedbackData } from '@/data/types/common/feedback.types'
import { cn } from '@/lib/cn'
import { CardVariant } from './Card.variants'
import Text from '../Text/Text'
import StatSection from './StatSection'

type AppReviewSectionProps = {
  data: FeedbackData
  className?: string
  valueClassName?: string
  barClassName?: string
} & VariantProps<typeof CardVariant>

export default function AppReviewSection({
  data,
  className,
  theme,
  valueClassName,
  barClassName,
}: AppReviewSectionProps) {
  const { rightTop, right, stats } = data
  const isDark = theme === 'dark'

  return (
    <section className={cn('grid w-full grid-cols-2 gap-8', className)}>
      {/* LEFT — 지표 3개 */}
      {stats && (
        <StatSection
          items={stats}
          theme={theme}
          layout='stack'
          valueClassName={valueClassName}
        />
      )}

      {/* RIGHT — 리뷰 헤더 + Pain Points 차트 */}
      <div className={cn('flex flex-col', CardVariant({ theme }))}>
        {/* 헤더 */}
        <div className='flex flex-col gap-6'>
          <div className='flex items-center gap-2'>
            {rightTop.icon && (
              <Image
                src={rightTop.icon}
                alt='큐리 앱 아이콘'
                width={32}
                height={32}
                className={cn(
                  'rounded-xl border',
                  isDark ? 'border-white/10' : 'border-gray-200'
                )}
              />
            )}
            <div className='flex items-center'>
              <Text as='caption' className='font-medium opacity-100'>
                {rightTop.title}
              </Text>
              <Text as='caption' className='pl-1 opacity-60'>
                {rightTop.count}
              </Text>
            </div>
          </div>
          <Text as='h6' className='font-medium whitespace-pre-line'>
            {rightTop.description}
          </Text>
        </div>

        {/* Pain Points 차트 */}
        <div className='mt-auto flex flex-col gap-5'>
          {right.items.map((item) => (
            <div
              key={item.label}
              className='grid grid-cols-[100px_1fr_40px] items-center gap-6'
            >
              <Text as='caption'>{item.label}</Text>
              <div
                className={cn(
                  'h-2 w-full overflow-hidden rounded-full',
                  isDark ? 'bg-white/10' : 'bg-black/5'
                )}
              >
                <div
                  className={cn('h-full rounded-full', barClassName)}
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <Text as='caption' className='text-right tabular-nums'>
                {item.value}%
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
