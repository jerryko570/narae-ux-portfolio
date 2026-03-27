import { buttonVariants } from './Button.variants'
import { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

type ButtonProps = {
  label: string
  className?: string
  onClick?: () => void
} & VariantProps<typeof buttonVariants>

export default function Button({
  label,
  className,
  size,
  variant,
}: ButtonProps) {
  return (
    <div className={cn(buttonVariants({ size, variant }), className)}>
      {label}
    </div>
  )
}
