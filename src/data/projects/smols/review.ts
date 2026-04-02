export const smolsReviewPageContent = {
  title: '서포터즈 피드백 원문 데이터',
  description:
    '서포터즈 4~6기 피드백을 UX 관점으로 재분류하고,\n사용자가 직접 탐색할 수 있도록 인터페이스를 설계했습니다.',
  downloadLabel: 'CSV 원본 다운로드',
  loadingText: '리뷰 데이터를 불러오는 중...',
  listTitle: '리뷰 데이터',
}

export const smolsReviewSummary = {
  title: '핵심 요약',
  description:
    '사용자 피드백을 종합해보면,\n기록 자체보다 표현 경험의 부족이 주요 문제로 나타났습니다.',
  items: [
    { title: '가장 큰 문제', value: '44.5%', label: '표현 기능 제한' },
    { title: '두 번째 문제', value: '39.2%', label: '앱 성능 및 안정성' },
    { title: '핵심 인사이트', value: '기록은 충분', label: '문제는 표현 경험' },
  ],
}

export const smolsReviewCategories = [
  '전체',
  '표현 기능 제한',
  '앱 성능 및 안정성',
  '기록 과정의 불편함',
  '소통 경험 부족',
  '기타',
] as const

export const smolsReviewCategoryTheme = {
  '표현 기능 제한': 'blue',
  '앱 성능 및 안정성': 'orange',
  '기록 과정의 불편함': 'dark',
  '소통 경험 부족': 'white',
  기타: 'dark',
} as const
