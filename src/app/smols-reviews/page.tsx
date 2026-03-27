'use client'

import { useReviewsData } from '@/app/smols-reviews/hooks/useReviewsData'
import Section from '@/components/ui/Section'
import Text from '@/components/ui/Text/Text'
import Button from '@/components/ui/Button/Button'
import Badge from '@/components/ui/Badge/Badge'
import { smols } from '@/data/projects'

export default function ReviewsPage() {
  const { filtered, category, setCategory, loading } = useReviewsData()

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/review_ux_full.csv'
    link.download = 'review_ux_full.csv'
    link.click()
  }

  if (loading) {
    return (
      <div className='p-10 text-black'>
        {smols.reviewPageContent.loadingText}
      </div>
    )
  }

  return (
    <Section>
      <div className='mb-20'>
        <div className='flex items-center justify-between'>
          <div>
            <Text as='h3'>{smols.reviewPageContent.title}</Text>
            <Text as='p' className='mt-4 text-gray-500'>
              {smols.reviewPageContent.description}
            </Text>
          </div>
          <div className='mt-4 space-y-2'>
            <Button
              variant='primary'
              label={smols.reviewPageContent.downloadLabel}
              size='lg'
              onClick={handleDownload}
            />
          </div>
        </div>
      </div>

      <div>
        <h1 className='mb-4 text-2xl font-bold text-black'>
          {smols.reviewPageContent.listTitle} ({filtered.length}건)
        </h1>

        <div className='mb-6 flex flex-wrap gap-2'>
          {smols.reviewCategories.map((c) => (
            <Button
              key={c}
              label={c}
              onClick={() => setCategory(c)}
              variant={category === c ? 'primary' : 'secondary'}
              size='sm'
            />
          ))}
        </div>

        <div className='space-y-2'>
          {filtered.map((item) => (
            <div
              key={item.id}
              className='flex justify-between gap-4 border-b border-gray-200 py-5 text-black'
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
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
