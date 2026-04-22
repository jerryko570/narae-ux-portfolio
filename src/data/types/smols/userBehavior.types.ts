import type { InsightItem } from '@/components/ui/InsightList/InsightList'

/* ---------- 타입 정의 ---------- */
export type MethodologyItem = {
  emoji: string
  title: string
  description: string
}

export type FirstActionCard = {
  title: string
  chartSrc: string
  insights: InsightItem[]
}

export type UserBehaviorData = {
  methodology: MethodologyItem[]
  firstActionCard: FirstActionCard
}
