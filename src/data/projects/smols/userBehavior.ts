// 리서치 컴포넌트 영역

import type { InsightItem } from '@/components/ui/InsightList/InsightList'

export type MethodologyItem = {
  emoji: string
  title: string
  description: string
}

export const smolsMethodology: MethodologyItem[] = [
  {
    emoji: '🥇',
    title: '조사 방법',
    description: '1개월 단위로 설문 및 인터뷰 진행',
  },
  {
    emoji: '👨🏻',
    title: '대상 및 모집',
    description: '앱 설치 이용자 대상 / 공개 설문을 통한 모집',
  },
  {
    emoji: '💰',
    title: '인센티브',
    description: '반려동물 병원비 10만원 지원 (10명)',
  },
]

export const smolsFirstActionInsights: InsightItem[] = [
  {
    subTitle: '기록 목적이 탐색보다 크다',
    description:
      '일상기록(42.5%) + 스티커 꾸미기(12.3%) = 54.8%. 피드 탐색(33.7%)보다 기록 관련 니즈가 더 크게 나타남',
  },
  {
    subTitle: '즉각적인 기록·소통을 원한다',
    description:
      '검색 단계를 생략하고 바로 기록·질문하고 싶어하는 니즈 확인. 댓글·좋아요 소통 수요도 존재',
  },
]

export const smolsUserBehavior = {
  methodology: smolsMethodology,
  firstActionCard: {
    title: '앱 실행 후 가장 먼저 사용하는 기능은?',
    chartSrc: '/images/smols/first-action-chart.svg',
    insightTitle: '절반 이상이 기록을 위해 앱을 켠다',
    insights: smolsFirstActionInsights,
  },
}
