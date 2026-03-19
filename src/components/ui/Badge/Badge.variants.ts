import { cva } from 'class-variance-authority'

export const BadgeVariants = cva(
  'inline-flex min-w-[4rem] items-center justify-center rounded-full font-bold whitespace-nowrap',
  {
    variants: {
      size: {
        sm: 'h-7 px-3 text-[clamp(0.75rem,1vw,0.875rem)]',
        md: 'h-9 px-4 text-[clamp(0.875rem,1.5vw,1rem)]',
        lg: 'h-12 px-5 text-[clamp(1rem,2vw,1.125rem)]',
      },
      theme: {
        dark: 'bg-gray-800 text-white',
        white: 'bg-white text-orange-500',
        orange: 'bg-orange-500 text-white',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)
