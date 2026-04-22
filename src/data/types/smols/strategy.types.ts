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

export type UxPrincipleType = {
  id: string
  title: string
  desc: string
  video: {
    before: VideoConfig
    after: VideoConfig
  }
  asIsImage: ImageConfig
  toBeImage: ImageConfig
}

// ─── Problem Metrics Stats ───────────────────────────────────
export type ProblemStat = {
  value: string
  label: string
}
