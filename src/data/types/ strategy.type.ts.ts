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
