export type FeedbackItem = { label: string; value: number }

export type FeedbackLink = { label: string; url: string }

export type FeedbackCardData = {
  icon: string
  title: string
  count: string
  description: string
  link: FeedbackLink
}

export type FeedbackData = {
  left: FeedbackCardData
  right: { title: string; unit: string; items: FeedbackItem[] }
}
