import { cva } from 'class-variance-authority'

export const BadgeVariants = cva(
  'font-bold inline-flex items-center justify-center rounded-full whitespace-nowrap',
  {
    variants: {
      size: {
        sm: 'h-[30px] px-3 text-sm',
        md: 'h-[40px] px-4 text-md',
        lg: 'h-[50px] px-5 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)
