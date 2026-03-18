import { cva } from 'class-variance-authority'

export const CardVariant = cva('flex w-full flex-col rounded-lg p-4', {
  variants: {
    theme: {
      dark: 'bg-gray-800 text-white',
      white: 'bg-white text-gray-900',
      lightOrange: 'bg-orange-50 text-gray-900',
      transparent: 'bg-transparent',
    },
  },
  defaultVariants: {
    theme: 'transparent',
  },
})
