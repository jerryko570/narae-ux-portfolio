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
  id?: string
  icon?: string
  numbering: string
  quote?: string
  title: string
  keywords?: string[]
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

// 개선 방향 아이템 타입
export type ImprovementDirection = {
  id: string
  numbering: string // "01", "02", "03"
  category: string // "기록 진입", "기록 과정", "재방문 유도"
  title: string // "탐색 중에도 바로 기록으로"
  description: string // "상단 CTA로 Viewer·Writer 진입 분리..."
}

// 개선 방향 섹션 전체
export type ImprovementStrategy = {
  badge: string // "개선 방향"
  title: string // "기록을 중심으로 구조를 다시 설계한다"
  directions: ImprovementDirection[]
}
