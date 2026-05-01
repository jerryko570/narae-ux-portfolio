// ─── 공통 UxPrinciple 타입 ──────────────────────────────
// SMOLS, CURI 등 여러 프로젝트의 AS-IS / TO-BE 비교 레이아웃에서 공유

export type ImageConfig = {
  src: string
  imageWidth: number
  imageHeight: number
}

export type Point = {
  highlight?: string
  text: string
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
  asIsPoints: Point[]
  toBePoints: Point[]
}
