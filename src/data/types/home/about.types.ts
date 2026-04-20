import type { BadgeProps } from '@/components/ui/Badge/Badge'

export type AboutStrength = {
  number: number
  title: string
  description: string
  badgeTheme?: BadgeProps['theme']
}
