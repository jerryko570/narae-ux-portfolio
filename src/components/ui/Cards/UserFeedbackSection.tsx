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
} & VariantProps<typeof CardVariant>

export default function AppReviewSection({
  data,
  className,
  theme,
}: AppReviewSectionProps) {
  const { rightTop, right, stats } = data

  return (
    <section className={cn('grid w-full grid-cols-2 gap-8', className)}>
      {/* LEFT — 지표 3개 */}
      {stats && (
        <StatSection
          items={stats}
          theme={theme}
          layout='stack'
          className='rounded-lg bg-gray-800'
        />
      )}

      {/* RIGHT — 리뷰 헤더 + Pain Points 차트 */}
      <div className={cn('flex flex-col', CardVariant({ theme }))}>
        {/* 헤더 */}
        <div className='flex flex-col gap-6'>
          <div className='flex items-center gap-4'>
            {rightTop.icon && (
              <Image src={rightTop.icon} alt='' width={32} height={32} />
            )}
            <Text as='caption' className='text-gray-500'>
              {rightTop.title}
            </Text>
          </div>
          <Text
            as='h6'
            className='font-extralight whitespace-pre-line text-white'
          >
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
              <Text as='caption' className='text-white'>
                {item.label}
              </Text>
              <div className='h-2 w-full overflow-hidden rounded-full bg-white/10'>
                <div
                  className='h-full rounded-full bg-orange-500'
                  style={{ width: `${item.value}%` }}
                />
              </div>
              <Text as='caption' className='text-right text-white tabular-nums'>
                {item.value}%
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
