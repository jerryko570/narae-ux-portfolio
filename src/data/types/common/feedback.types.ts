// ─── 공통 Feedback 타입 ──────────────────────────────
// SMOLS, CURI 등 여러 프로젝트에서 공유하는 피드백 타입

export type StatItem = {
  value: string
  label: string
  description?: string
}

export type FeedbackBarItem = {
  label: string
  value: number
}

export type FeedbackData = {
  rightTop: {
    icon?: string
    title: string
    count?: string
    description: string
  }
  right: {
    title?: string
    unit?: string
    items: FeedbackBarItem[]
  }
  stats?: StatItem[]
}
