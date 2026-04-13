export type HeroMeta = { label: string; values: string[] }

export type HeroData = {
  id: number
  badge: string
  badgeText: string[]
  title: string
  image: string
  meta: HeroMeta[]
}
