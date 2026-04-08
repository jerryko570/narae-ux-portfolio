import { cva } from 'class-variance-authority'

export const HeaderVariant = cva('h-20', {
  variants: {
    variant: {
      white: 'border-b border-gray-100 bg-white',
      transparent: 'bg-transparent',
    },
    sticky: {
      true: 'sticky top-0 z-50',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'white',
    sticky: true,
  },
})
