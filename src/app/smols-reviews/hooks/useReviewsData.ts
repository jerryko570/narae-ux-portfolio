import { useEffect, useState, useMemo } from 'react'
import Papa from 'papaparse' // 텍스트를 객체 배열로 변환하는 라이브러리

type ReviewRow = {
  review: string
  ux_category: string
  date?: string
  likes?: string
}

export function useReviewsData() {
  const [data, setData] = useState<ReviewRow[]>([]) // 데이터 상태 (CSV 불러오면 바뀜)
  const [category, setCategory] = useState('전체') // UI 상태 (버튼 클릭 시 바뀜)
  const [loading, setLoading] = useState(true) // 로딩 상태 (데이터 다 불러오면 바뀜)

  // 이 코드는 렌더링이랑 분리해서 실행함 (언제 실행할지 조건 설정)
  useEffect(() => {
    fetch('/review_ux_full.csv') // Promise 반환
      .then((res) => res.text()) // fetch가 완료되면 res(응답)를 문자열로 변환

      .then((csv) => {
        const parsed = Papa.parse<ReviewRow>(csv, { header: true }) // 객체 배열로 파싱
        const rows = parsed.data.filter(
          (item) => item.review?.trim() && item.ux_category?.trim()
        )
        setData(rows) // 정제된 데이터 저장
        setLoading(false) // 로딩 끝
      })
  }, [])

  const filtered = useMemo(() => {
    return category === '전체'
      ? data
      : data.filter((item) => item.ux_category === category)
  }, [data, category])

  return { filtered, category, setCategory, loading }
}
