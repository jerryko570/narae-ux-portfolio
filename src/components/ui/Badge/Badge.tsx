import { BadgeVariants } from './Badge.variants'
import type { VariantProps } from 'class-variance-authority'

type BadgeProps = {
  label: string
  className?: string
} & VariantProps<typeof BadgeVariants>

export default function Badge({ label, size, className }: BadgeProps) {
  return <span className={BadgeVariants({ size, className })}>{label}</span>
}
