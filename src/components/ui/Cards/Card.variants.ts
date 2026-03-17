import { cva } from 'class-variance-authority'

export const CardVariant = cva('flex items-center rounded-lg', {
  variants: {
    theme: {
      dark: 'bg-gray-800',
      light: 'bg-white',
    },
  },
})
