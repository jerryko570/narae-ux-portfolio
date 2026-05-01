import type { FeedbackData } from '@/data/types/common/feedback.types'

export const curiFeedbackData: FeedbackData = {
  stats: [
    {
      label: '질문까지 행동 단계',
      value: '4단계',
      description: '진입 → 터치 → 촬영 → 크롭 \n이후에야 질문 가능',
    },
    {
      label: '튜터 질문 선호도',
      value: '50.1%',
      description: 'AI 답변보다 튜터 직접 답변을 \n선호하는 사용자 비율',
    },
    {
      label: '앱 접근 시점',
      value: '67%',
      description: '해설지를 봐도 이해 안 될 때 \n앱을 찾음',
    },
  ],
  rightTop: {
    icon: '/images/curi/icons/app-icon.png',
    title: '설문조사 ·',
    count: '사용자 패턴 분석',
    description: '학생은 빠른 답을 원했다.\n복잡한 검색 흐름이 막았을 뿐이다.',
  },
  right: {
    title: '',
    unit: '',
    items: [
      { label: '문제 검색 불편', value: 48 },
      { label: '교재 검색 불편', value: 28 },
      { label: '앨범·텍스트 검색', value: 16 },
      { label: '기타 사용 불편', value: 8 },
    ],
  },
}
