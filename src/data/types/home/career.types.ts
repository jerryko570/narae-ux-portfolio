import type { BadgeProps } from '@/components/ui/Badge/Badge'

// ─── Link (공용 타입) ─────────────────────────────────────────
export type CareerLink = {
  label: string
  url: string
}

// ─── Education ────────────────────────────────────────────────
export type EducationItem = {
  year: string
  title: string
}

// ─── Experience ───────────────────────────────────────────────
export type ExperienceItem = {
  year: string
  company?: string
  description: string
  link?: CareerLink
}

export type CareerEra = {
  period: string
  label: string
  theme: BadgeProps['theme']
  gap?: 'sm' | 'md' | 'lg' | 'xl'
}

export type CareerTimelineEntry =
  | ({ kind: 'era' } & CareerEra)
  | ({ kind: 'item' } & ExperienceItem)

// ─── Tech Stack ───────────────────────────────────────────────
export type TechBadge = {
  label: string
  theme: BadgeProps['theme']
}

export type TechCategory = {
  title: string
  description: string
  items: TechBadge[]
}
