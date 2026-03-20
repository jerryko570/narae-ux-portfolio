import { cva } from 'class-variance-authority'

export const BadgeVariants = cva(
  'inline-flex min-w-[4rem] items-center justify-center rounded-full font-bold whitespace-nowrap',
  {
    variants: {
      size: {
        sm: 'h-[clamp(1.5rem,2vw,1.75rem)] px-3 text-[clamp(0.75rem,1vw,0.875rem)]', // 24 → 28px
        md: 'h-[clamp(1.75rem,2.5vw,2.25rem)] px-4 text-[clamp(0.875rem,1.5vw,1rem)]', // 28 → 36px
        lg: 'h-[clamp(2rem,3vw,3rem)] px-5 text-[clamp(1rem,2vw,1.25rem)]', // 32 → 48px
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
