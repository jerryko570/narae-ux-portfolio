type BaseSectionData = {
  badge: string
  title: string
  align: 'left' | 'center' | 'right'
}
export type BackgroundSection = BaseSectionData & {
  type: 'background'
  description?: string
}
export type MetricItem = { value: string; label: string; insight?: string }

export type MetricsSection = BaseSectionData & {
  type: 'metrics'
  metrics: { description: string; items: MetricItem[] }
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
  researchSummary: { who: StatCardData; what: StatCardData; highlight: string }
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
