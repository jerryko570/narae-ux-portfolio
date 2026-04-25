export type FeedbackItem = { label: string; value: number }

export type FeedbackLink = { label: string; url: string }

export type FeedbackCardData = {
  icon: string
  title: string
  count: string
  description: string
}

// ← 추가
export type FeedbackStat = {
  label: string
  value: string
  description: string
}

export type FeedbackData = {
  rightTop: FeedbackCardData
  right: { title: string; unit: string; items: FeedbackItem[] }
  stats?: FeedbackStat[] // ← 추가 (optional)
}
