// 리서치 컴포넌트 영역

import type { InsightItem } from '@/components/ui/InsightList/InsightList'

export type MethodologyItem = {
  emoji: string
  title: string
  description: string
}

export const curiMethodology: MethodologyItem[] = [
  {
    emoji: '🥇',
    title: '조사 방법',
    description:
      'Google Forms 설문 · 2주간 진행 \n큐리 앱 설치 사용자 대상 · 공개 설문 모집',
  },
  {
    emoji: '👨🏻',
    title: '주요 관찰 포인트',
    description:
      '앱 사용 시점 · 자주 쓰는 기능 \n기능별 불편 사항 · 만족도 및 사용성',
  },
  {
    emoji: '💰',
    title: '참여자 인센티브',
    description: '참여자 리워드 20만원 이상 \n(3명)',
  },
]

export const curiFirstActionInsights: InsightItem[] = [
  {
    subTitle: '튜터 직접 답변을 압도적으로 선호',
    description:
      '응답자 절반 이상(50.1%)이 튜터 질문을 최우선 사용. 문제·텍스트 검색 등 다른 기능은 보조적 수단으로만 활용',
  },
  {
    subTitle: '검색을 건너뛰고 바로 답을 원한다',
    description:
      '즉각적 해답 요구가 강하며, 복잡한 검색 흐름 없이 곧바로 튜터에게 질문하고 싶어하는 니즈 확인',
  },
]

export const curiUserBehavior = {
  methodology: curiMethodology,
  firstActionCard: {
    title: '앱 실행 후 가장 먼저 사용하는 기능은?',
    chartSrc: '/images/curi/first-action-chart.svg',
    insightTitle: '',
    insights: curiFirstActionInsights,
  },
}
