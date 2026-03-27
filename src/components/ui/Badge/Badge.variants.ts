import { cva } from 'class-variance-authority'

export const BadgeVariants = cva(
  'inline-flex min-w-[2.4rem] items-center justify-center rounded-full font-bold whitespace-nowrap',
  {
    variants: {
      size: {
        sm: 'h-[1.75rem] px-2 text-[0.875rem]', // 28px
        md: 'h-[2.25rem] px-4 text-[1rem]', // 36px
        lg: 'h-[3rem] px-5 text-[1.25rem]', // 48px
      },
      theme: {
        dark: 'bg-gray-800 text-white',
        white: 'bg-white text-orange-500',
        orange: 'bg-orange-500 text-white',
        blue: 'bg-blue-500 text-white',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)
