type BaseSectionData = {
  badge: string
  title: string
  align: 'left' | 'center' | 'right'
}

export type BackgroundSection = BaseSectionData & {
  type: 'background'
  description?: string
}

export type MetricItem = {
  value: string
  label: string
  insight?: string
}

export type MetricsSection = BaseSectionData & {
  type: 'metrics'
  metrics: {
    description: string
    items: MetricItem[]
  }
}

export type StatCardData = {
  title: string
  data?: string
  subtitle: string
  description: string
  subdescription: string
}

export type InsightSection = BaseSectionData & {
  type: 'insight'
  description: string
  titleSize: 'h1' | 'h2'
  image: string
  researchSummary: {
    who: StatCardData
    what: StatCardData
    highlight: string
  }
}

export type ResearchSection = BaseSectionData & {
  type: 'research'
  description?: string
}

export type SectionData =
  | BackgroundSection
  | MetricsSection
  | InsightSection
  | ResearchSection

export type HeroMeta = {
  label: string
  values: string[]
}

export type HeroData = {
  id: number
  badge: string
  badgeText: string
  title: string
  description: string
  image: string
  meta: HeroMeta[]
}

export type FeedbackItem = {
  label: string
  value: number
}

export type FeedbackLink = {
  label: string
  url: string
}

export type FeedbackCardData = {
  icon: string
  title: string
  count: string
  description: string
  link: FeedbackLink
}

export type FeedbackData = {
  left: FeedbackCardData
  right: {
    title: string
    unit: string
    items: FeedbackItem[]
  }
}

export type ReviewSummaryItem = {
  title: string
  value: string
  label: string
}

export type ReviewSummaryData = {
  title: string
  description: string
  items: ReviewSummaryItem[]
}

export type SmolsInsightSummary = {
  description: string
}

export type ReviewItem = {
  id: string
  review: string
  ux_category: string
}

export type SmolsStrategy = {
  badge: string
  title: string
}
