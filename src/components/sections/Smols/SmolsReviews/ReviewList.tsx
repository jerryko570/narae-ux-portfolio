import Text from '@/components/ui/Text/Text'
import Badge from '@/components/ui/Badge/Badge'
import { smols } from '@/data/projects'
import type { ReviewItem } from '@/data/types/smols'

type ReviewListProps = {
  items: ReviewItem[]
}

export default function ReviewList({ items }: ReviewListProps) {
  return (
    <div>
      <Text as='h5' className='mb-4 font-bold text-gray-900'>
        {smols.reviewPageContent.listTitle} ({items.length}건)
      </Text>
      <div className='space-y-2'>
        {items.map((item) => (
          <div
            key={item.id}
            className='flex justify-between gap-4 border-b border-gray-200 py-4 text-black'
          >
            <Text as='p' className='max-w-[80%]'>
              {item.review}
            </Text>
            <Badge
              label={item.ux_category}
              theme={
                smols.reviewCategoryTheme[
                  item.ux_category as keyof typeof smols.reviewCategoryTheme
                ] ?? 'gray'
              }
              size='sm'
              radius='md'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
