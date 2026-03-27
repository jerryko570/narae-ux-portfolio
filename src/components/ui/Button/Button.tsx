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
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(buttonVariants({ size, variant }), className)}
    >
      {label}
    </button>
  )
}
