import { cva } from 'class-variance-authority'

export const BadgeVariants = cva(
  'inline-flex min-w-[3rem] items-center justify-center rounded-full font-bold whitespace-nowrap',
  {
    variants: {
      size: {
        sm: 'h-8 text-sm',
        md: 'text-md h-10',
        lg: 'h-14 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)
