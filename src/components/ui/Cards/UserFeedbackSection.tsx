'use client'

import Text from '../Text/Text'
import { CardVariant } from './Card.variants'
import { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'
import type { FeedbackData } from '@/data/types/smols'
import Image from 'next/image'
import StatSection from './StatSection'

type StatItem = {
  value: string
  label: string
}

type AppReviewSectionProps = {
  data: FeedbackData
  className?: string
  stats?: StatItem[]
} & VariantProps<typeof CardVariant>

export default function AppReviewSection({
  data,
  className,
  theme,
  stats,
}: AppReviewSectionProps) {
  const { left, right } = data

  return (
    <section
      className={cn(
        'flex w-full flex-col overflow-hidden',
        CardVariant({ theme }),
        className
      )}
    >
      {/* STATS — 상단 */}

      {stats && (
        <StatSection
          items={stats}
          theme={theme}
          className='border-b border-white/5 p-0 pb-8'
        />
      )}

      {/* LEFT + RIGHT */}
      <div className='flex w-full'>
        {/* LEFT — 리뷰 분석 */}
        <div className='flex w-[50%] shrink-0 flex-col gap-8 p-6 pt-12'>
          <div className='flex items-center justify-start'>
            <div className='flex items-center gap-4'>
              {left.icon && (
                <Image src={left.icon} alt='app icon' width={40} height={40} />
              )}
              <Text as='h6' className='text-white'>
                {left.title}
              </Text>
            </div>
            <Text as='caption' className='ml-56 text-gray-500'>
              {left.count}
            </Text>
          </div>
          <Text as='p' className='whitespace-pre-line text-white'>
            {left.description}
          </Text>
          {left.link && (
            <a href={left.link.url} target='_blank' rel='noopener noreferrer'>
              <Text
                as='p'
                className='font-semibold text-blue-500 underline underline-offset-4 hover:text-blue-600'
              >
                {left.link.label}
              </Text>
            </a>
          )}
        </div>

        {/* 구분선 */}
        <div className='w-px shrink-0 self-stretch bg-white/5' />

        {/* RIGHT — Pain Points 차트 */}
        <div className='flex min-w-0 flex-1 flex-col gap-10 p-8 pt-12'>
          <div className='flex items-center justify-between gap-6'>
            <Text as='h6' className='text-white'>
              {right.title}
            </Text>
            <Text
              as='caption'
              className='text-right whitespace-pre-line text-gray-500'
            >
              {right.unit}
            </Text>
          </div>
          <div className='flex flex-col gap-10'>
            {right.items.map((item) => (
              <div key={item.label} className='flex flex-col gap-3'>
                <div className='flex items-center justify-between gap-6'>
                  <Text as='p' className='text-white'>
                    {item.label}
                  </Text>
                  <Text as='p' className='shrink-0 text-white'>
                    {item.value}%
                  </Text>
                </div>
                <div className='h-3 w-full overflow-hidden rounded-full bg-white/6'>
                  <div
                    className='h-3 rounded-full bg-orange-500'
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
