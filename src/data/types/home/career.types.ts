import type { BadgeProps } from '@/components/ui/Badge/Badge'

// Education용
export type EducationItem = {
  year: string
  title: string
}

// Experience용
export type ExperienceItem = {
  year: string
  company?: string
  description: string
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

export type TechBadge = {
  label: string
  theme: BadgeProps['theme']
}

export type TechCategory = {
  title: string
  description: string
  items: TechBadge[]
}
