export type VideoConfig = {
  src: string
  className?: string
}

export type StrategyItem = {
  title: string
  description: string
  image: string
  imageWidth: number
  imageHeight: number
}

export type UxStrategyItem = {
  numbering: string
  title: string
  description: string
}

export type UxStrategy = {
  items: UxStrategyItem[]
  video?: VideoConfig
}

export type TransformationItem = {
  label: string
  title: string
  description: string
}

export type InsightItem = {
  text: string
}

export type Transformation = {
  center: string
  before: TransformationItem
  after: TransformationItem
  insights: InsightItem
}

export type ImageConfig = {
  src: string
  imageWidth: number
  imageHeight: number
}

// ─── UX Principle — AS-IS / TO-BE 비교 구조 ──────────────────
export type ComparisonPoint = {
  text: string
  highlight?: string
}

export type UxPrincipleType = {
  id: string
  numbering: string
  quote: string
  title: string
  keywords: string[]
  asIsImages: ImageConfig[]
  toBeImages: ImageConfig[]
  asIsPoints: ComparisonPoint[]
  toBePoints: ComparisonPoint[]
}

// ─── Problem Metrics Stats ───────────────────────────────────
export type ProblemStat = {
  value: string
  label: string
}
