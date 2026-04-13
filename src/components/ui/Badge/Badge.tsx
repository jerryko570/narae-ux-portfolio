import { BadgeVariants } from './Badge.variants'
import type { VariantProps } from 'class-variance-authority'

type BadgeProps = {
  label: string
  className?: string
  radius?: string
} & VariantProps<typeof BadgeVariants>

export default function Badge({
  label,
  size,
  theme,
  radius,
  className,
}: BadgeProps) {
  return (
    <span className={BadgeVariants({ size, theme, radius, className })}>
      {label}
    </span>
  )
}
