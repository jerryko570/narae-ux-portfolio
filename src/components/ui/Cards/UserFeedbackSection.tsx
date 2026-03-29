import Text from '../Text/Text'
import { CardVariant } from './Card.variants'
import { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'
import type { FeedbackData } from '@/data/types'
import Image from 'next/image'

type UserFeedbackSectionProps = {
  data: FeedbackData
  className?: string
} & VariantProps<typeof CardVariant>

export default function AppReviewSection({
  data,
  className,
  theme,
}: UserFeedbackSectionProps) {
  const { left, right } = data

  return (
    <section
      className={cn(
        'grid grid-cols-[3fr_1px_7fr] gap-16',
        CardVariant({ theme }),
        className
      )}
    >
      <div className='w-full'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            {left.icon && (
              <Image src={left.icon} alt='app icon' width={40} height={40} />
            )}
            <Text as='h6' className='text-white'>
              {left.title}
            </Text>
          </div>
          <Text as='caption' className='text-gray-400'>
            {left.count}
          </Text>
        </div>

        <Text as='p' className='pt-8 whitespace-pre-line text-white/95'>
          {left.description}
        </Text>

        {left.link && (
          <a href={left.link.url} target='_blank' rel='noopener noreferrer'>
            <Text
              as='p'
              className='mt-16 inline-block font-semibold text-blue-500 underline underline-offset-4 hover:text-blue-600'
            >
              {left.link.label}
            </Text>
          </a>
        )}
      </div>

      <div className='w-1 bg-white/3' />

      <div className='w-full min-w-0'>
        <div className='flex items-center justify-between gap-6'>
          <Text as='h6' className='text-white'>
            {right.title}
          </Text>
          <Text
            as='caption'
            className='text-right whitespace-pre-line text-gray-400'
          >
            {right.unit}
          </Text>
        </div>

        <div className='mt-10 flex w-full flex-col gap-10'>
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
              <div className='h-6 w-full rounded-full bg-white/15'>
                <div
                  className='h-6 rounded-full bg-orange-500'
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
