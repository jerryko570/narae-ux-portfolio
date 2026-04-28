// 리서치 컴포넌트 영역
import type { InsightItem } from '@/components/ui/InsightList/InsightList'

export type MethodologyItem = {
  emoji: string
  title: string
  description: string
}

// ─── 조사 방법론 ────────────────────────────────────────────
export const smolsMethodology: MethodologyItem[] = [
  {
    emoji: '🥇',
    title: '조사 방법',
    description: '구글폼 설문·앱스토어 리뷰 분석 \n설치 사용자 대상(1개월)',
  },
  {
    emoji: '👨🏻',
    title: '주요 관찰 포인트',
    description: '사용 시점, 자주 쓰는 기능 \n불편 사항',
  },
  {
    emoji: '💰',
    title: '참여자 인센티브',
    description: '반려동물 병원비 10만원 지원 \n(10명)',
  },
]

// ─── 첫 행동 인사이트 ───────────────────────────────────────
export const smolsFirstActionInsights: InsightItem[] = [
  {
    subTitle: '기록 목적이 탐색보다 크다',
    description: '기록 관련 니즈 50% vs 피드 탐색 33.7% → 기록 수요가 더 크다',
  },
  {
    subTitle: '즉각적인 기록·소통을 원한다',
    description: '즉시 기록 원함. 댓글·좋아요 소통 수요도 확인',
  },
]

// ─── 사용자 행동 종합 데이터 ─────────────────────────────────
export const smolsUserBehavior = {
  methodology: smolsMethodology,
  firstActionCard: {
    title: '앱 실행 후 가장 먼저 사용하는 기능은?',
    chartSrc: '/images/smols/first-action-chart.svg',
    insightTitle: '절반 이상이 기록을 위해 앱을 켠다',
    insights: smolsFirstActionInsights,
  },
}
