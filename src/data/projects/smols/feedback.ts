import type { FeedbackData } from '@/data/types/common/feedback.types'

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
