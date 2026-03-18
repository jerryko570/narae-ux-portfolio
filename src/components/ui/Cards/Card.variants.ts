import { cva } from 'class-variance-authority'

export const CardVariant = cva('flex w-full flex-col rounded-lg p-10', {
  variants: {
    theme: {
      dark: 'bg-gray-800 text-white',
      white: 'bg-white text-gray-900',
      orange: 'bg-orange-50 text-gray-900',
    },
  },
})
