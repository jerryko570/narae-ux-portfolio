import { useEffect, useState, useMemo } from 'react'
import Papa from 'papaparse'

type ReviewRow = {
  id: string
  review: string
  ux_category: string
  date?: string
  likes?: string
}

export function useReviewsData() {
  const [data, setData] = useState<ReviewRow[]>([])
  const [category, setCategory] = useState('전체')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/review_ux_full.csv')
      .then((res) => res.text())
      .then((csv) => {
        const parsed = Papa.parse<ReviewRow>(csv, { header: true })
        const rows = parsed.data
          .filter((item) => item.review?.trim() && item.ux_category?.trim())
          .map((item, i) => ({ ...item, id: `review-${i}` }))
        setData(rows)
        setLoading(false)
      })
      .catch((error) => console.error('리뷰 데이터 로딩 실패:', error))
      .finally(() => setLoading(false))
  }, [])

  const filtered = useMemo(() => {
    return category === '전체'
      ? data
      : data.filter((item) => item.ux_category === category)
  }, [data, category])

  return { filtered, category, setCategory, loading }
}
