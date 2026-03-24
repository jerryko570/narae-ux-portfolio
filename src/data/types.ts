type BaseSectionData = {
  badge: string
  title: string
  align: 'left' | 'center' | 'right'
}

export type OverviewSection = BaseSectionData & {
  type: 'background'
  description: string
}

export type ProblemEvidenceSection = BaseSectionData & {
  type: 'keyMetric'
  stat: {
    description: string
    items: { value: string; label: string; goal: string }[]
  }
}

export type UserResearchSection = BaseSectionData & {
  type: 'insight'
  description: string
  titleSize: 'h1' | 'h2'
  highlight: string
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
