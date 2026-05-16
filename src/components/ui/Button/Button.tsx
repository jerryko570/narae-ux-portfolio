import { buttonVariants } from './Button.variants'
import { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'
import Link from 'next/link'

type ButtonProps = {
  label: string
  className?: string
  onClick?: () => void
  disabled?: boolean
  href?: string
} & VariantProps<typeof buttonVariants>

export default function Button({
  label,
  className,
  size,
  variant,
  width,
  onClick,
  disabled,
  href,
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ size, variant, width }), className)}
      >
        {label}
      </Link>
    )
  }

  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={cn(buttonVariants({ size, variant, width }), className)}
    >
      {label}
    </button>
  )
}
