import type { FeedbackData } from '@/data/types/common/feedback.types'

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
    '사용자 피드백을 종합해보면,\n기록 자체보다 꾸미기 경험의 부족이 주요 문제로 나타났습니다.',
  items: [
    { title: '가장 큰 문제', value: '44.5%', label: '꾸미기 기능 부족' },
    { title: '두 번째 문제', value: '39.2%', label: '앱 성능 및 안정성' },
    {
      title: '핵심 인사이트',
      value: '기록은 충분',
      label: '문제는 꾸미기 경험',
    },
  ],
}

export const smolsReviewCategories = [
  '전체',
  '꾸미기 기능 부족',
  '앱 성능/안정성',
  '기록 경험 불편',
  '소통 기능 부족',
  '기타',
] as const

export const smolsReviewCategoryTheme = {
  '꾸미기 기능 부족': 'outlineBlue',
  '앱 성능/안정성': 'outlineOrange',
  '기록 경험 불편': 'outlinePink',
  '소통 기능 부족': 'outlinePink',
  기타: 'outlineDark',
} as const

export const smolsReviewInsight = {
  title: '꾸미기 기능 부족이 44.5%로 가장 많았습니다.',
  description: '기록보다 꾸미기 경험이 핵심 문제였습니다.',
  card: [
    { title: '964건', description: '총 분석 리뷰' },
    { title: '44.5%', description: '꾸미기 기능 부족' },
    { title: '3기수', description: '04기 · 05기 · 06기' },
  ],
}

export const smolsFeedbackData: FeedbackData = {
  stats: [
    {
      label: '평균 체류 시간',
      value: '45초',
      description: '기록 진입 없이 피드만 보고 이탈',
    },
    { label: '1주 이탈율', value: '60%', description: '재방문 없이 앱 종료' },
    {
      label: '기록 전환율',
      value: '15%',
      description: '피드 탐색 중 기록 전환 비율',
    },
  ],
  rightTop: {
    icon: '/images/smols/icons/app-icon.png',
    title: '사용자 리뷰 분석',
    count: '(941건)',
    description: '사용자는 기록하고 싶었다.\n구조가 막았다.',
  },
  right: {
    title: '',
    unit: '',
    items: [
      { label: '꾸미기 기능 부족', value: 44.5 },
      { label: '앱 성능 및 안정성', value: 39.2 },
      { label: '기록 과정 불편', value: 10.0 },
      { label: '소통 기능 부족', value: 6.3 },
    ],
  },
}
