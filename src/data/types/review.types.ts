export type ReviewSummaryItem = { title: string; value: string; label: string }

export type ReviewSummaryData = {
  title: string
  description: string
  items: ReviewSummaryItem[]
}

export type SmolsInsightSummary = { description: string }

export type ReviewItem = { id: string; review: string; ux_category: string }
