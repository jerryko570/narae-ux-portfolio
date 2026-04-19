import { cva } from 'class-variance-authority'

export const BadgeVariants = cva(
  'inline-flex min-w-[2.4rem] items-center justify-center font-bold whitespace-nowrap',
  {
    variants: {
      size: {
        sm: 'h-7 px-3 text-sm',
        md: 'h-[2.25rem] px-4 text-[1rem]',
        lg: 'h-[3rem] px-5 text-[1.25rem]',
      },
      theme: {
        dark: 'bg-gray-800 text-white',
        white: 'bg-white text-orange-500',
        orange: 'bg-orange-500 text-white',
        blue: 'bg-blue-500 text-white',
        darkOrange: 'bg-orange-700 text-white',
        outlineWhite: 'border border-white font-light text-white',
        outlineDark: 'border border-gray-600 font-light text-gray-600',
        outlineBlue: 'border border-blue-500 font-light text-blue-500',
        outlinePink: 'border border-pink-500 font-light text-pink-500',
        outlineOrange: 'border border-orange-500 font-light text-orange-500',
      },
      radius: {
        full: 'rounded-full',
        md: 'rounded-[4px]',
      },
    },
    defaultVariants: {
      size: 'md',
      radius: 'full',
    },
  }
)
