import { cva } from 'class-variance-authority'

export const buttonVariants = cva('flex w-fit items-center rounded-full', {
  variants: {
    variant: {
      primary: 'bg-orange-500 text-white hover:bg-orange-600',
      outline:
        'border border-orange-500 bg-white text-orange-500 hover:bg-orange-50',
      ghost: 'bg-gray-200 text-gray-400',
    },
    size: {
      lg: 'h-12 px-6 text-base font-semibold',
      md: 'h-10 px-5 text-sm font-medium',
      sm: 'h-8 px-4 text-sm font-medium',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
