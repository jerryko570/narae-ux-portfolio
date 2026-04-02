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
  number: number
  title: string
  description: string
}

export type UxStrategy = {
  items: UxStrategyItem[]
  video?: VideoConfig
}

// UX PRINCIPLES
export type TransformationItem = {
  label: string
  title: string
  description: string
}

export type InsightItem = {
  text: string
  position: 'top' | 'bottom'
}

export type Transformation = {
  center: string
  before: TransformationItem
  after: TransformationItem
  insights: InsightItem[]
}

export type ImageConfig = {
  src: string
  imageWidth: number
  imageHeight: number
}

export type UxPrincipleType = {
  video: {
    before: VideoConfig
    after: VideoConfig
  }
  asIsImage: ImageConfig
  toBeImage: ImageConfig
}
