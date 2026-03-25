type BaseSectionData = {
  badge: string
  title: string
  align: 'left' | 'center' | 'right'
}

export type OverviewSection = BaseSectionData & {
  type: 'background'
  description?: string
}

export type ProblemEvidenceSection = BaseSectionData & {
  type: 'keyMetric'
  stat: {
    description: string
    items: { value: string; label: string; insight?: string; goal?: string }[]
  }
}

export type StatCardData = {
  title: string
  data: string
  subtitle: string
  description: string
  subdescription: string
}

export type UserResearchSection = BaseSectionData & {
  type: 'insight'
  description: string
  titleSize: 'h1' | 'h2'
  researchResult: {
    who: StatCardData
    what: StatCardData
    donutChart: {
      title: string
      image: string
      description: string
    }
    highlight: string
  }
}

export type SectionData =
  | OverviewSection
  | ProblemEvidenceSection
  | UserResearchSection

export type HeroMeta = { label: string; values: string[] }

export type HeroData = {
  id: number
  badge: string
  badgeText: string
  title: string
  description: string
  image: string
  meta: HeroMeta[]
}

export type AppReviewItem = {
  label: string
  value: number
}

export type AppReviewCardData = {
  icon: string
  title: string
  count: string
  description: string
  link: { label: string; url: string }
}

export type AppReviewData = {
  left: AppReviewCardData
  right: {
    title: string
    unit: string
    items: AppReviewItem[]
  }
}
