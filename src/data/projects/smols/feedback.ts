import type { FeedbackData } from '../../types'

export const smolsFeedbackData: FeedbackData = {
  left: {
    icon: '/images/smols/icons/app-icon.png',
    title: '서포터즈 피드백 분석',
    count: '(941건 · 서포터즈 4~6기)',
    description:
      '사용자의 80%는 기록을 목적으로 앱을 사용했지만,\n기록을 지속하지 못한 가장 큰 이유는\n꾸미기 경험 부족(44.5%)이었습니다.',
    link: { label: '리뷰 데이터 살펴보기', url: '/smols-reviews' },
  },
  right: {
    title: 'UX Pain Points',
    unit: '(기타 카테고리 제외)',
    items: [
      { label: '꾸미기 기능 부족', value: 44.5 },
      { label: '앱 성능 및 안정성', value: 39.2 },
      { label: '기록 경험 불편', value: 10.0 },
      { label: '소통 기능 부족', value: 6.3 },
    ],
  },
}
