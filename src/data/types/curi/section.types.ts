type BaseSectionData = {
  badge?: string
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
  metrics?: { description: string; items: MetricItem[] }
}

export type StatCardData = {
  title: string
  data?: string
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

export type SolutionSection = BaseSectionData & {
  type: 'solution'
  badge?: string
  description?: string
}

export type ResultSection = BaseSectionData & {
  type: 'result'
  badge?: string
  title: string
  description?: string
}

export type RetrospectiveSection = BaseSectionData & {
  type: 'retrospective'
  badge?: string
  title: string
  description?: string
}

export type SectionData =
  | BackgroundSection
  | MetricsSection
  | InsightSection
  | ResearchSection
  | SolutionSection
  | ResultSection
  | RetrospectiveSection
