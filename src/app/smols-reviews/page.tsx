'use client'

import { useReviewsData } from '@/app/smols-reviews/hooks/useReviewsData'
import Section from '@/components/ui/Section'
import ReviewHeader from '@/components/sections/Smols/SmolsReviews/ReviewHeader'
import ReviewFilter from '@/components/sections/Smols/SmolsReviews/ReviewFilter'
import ReviewList from '@/components/sections/Smols/SmolsReviews/ReviewList'
import ReviewInsight from '@/components/sections/Smols/SmolsReviews/ReviewInsight'
import ReviewSkeleton from '@/components/sections/Smols/SmolsReviews/ReviewSkeleton'
import { downloadCSV } from '@/utils/downloadCSV'

export default function ReviewsPage() {
  const { filtered, category, setCategory, loading } = useReviewsData()

  if (loading)
    return (
      <Section>
        <ReviewSkeleton />
      </Section>
    )

  return (
    <Section className='bg-gray-100'>
      <ReviewHeader
        onDownload={() =>
          downloadCSV('/review_ux_full.csv', 'review_ux_full.csv')
        }
      />
      <ReviewInsight />
      <ReviewFilter category={category} onSelect={setCategory} />
      <ReviewList items={filtered} />
    </Section>
  )
}
