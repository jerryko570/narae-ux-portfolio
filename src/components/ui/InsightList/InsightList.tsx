// 리서치 섹션 두번째 컬럼의 콘텐츠 영역

import { Fragment } from 'react'
import Text from '../Text/Text'
import { cn } from '@/lib/cn'

export type InsightItem = {
  subTitle: string
  description: string
}

type InsightListProps = {
  title?: string
  items: InsightItem[]
  className?: string
}

export default function InsightList({
  title,
  items,
  className,
}: InsightListProps) {
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      {title && (
        <Text as='body' className='font-medium text-orange-500'>
          {title}
        </Text>
      )}

      <div className='flex flex-col gap-6'>
        {items.map((item, idx) => (
          <Fragment key={item.subTitle}>
            <div className='flex flex-col gap-2'>
              <Text as='body' className='font-medium'>
                {item.subTitle}
              </Text>
              <Text as='caption' className='font-regular pt-2 opacity-50'>
                {item.description}
              </Text>
            </div>

            {idx < items.length - 1 && (
              <div className='h-px w-full bg-white/5' />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
