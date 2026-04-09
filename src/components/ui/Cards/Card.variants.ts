import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

export const CardVariant = cva('flex w-full rounded-lg p-12', {
  variants: {
    theme: {
      dark: 'bg-gray-800 text-white',
      gray: 'bg-gray-100 text-black',
      white: 'bg-white text-gray-900',
      lightOrange: 'bg-orange-50 text-gray-900',
      orange: 'bg-orange-500 text-white',
      pink: 'bg-pink-500 text-white',
      transparent: 'bg-transparent',
    },
  },
  defaultVariants: {
    theme: 'transparent',
  },
})

export type CardTheme = NonNullable<VariantProps<typeof CardVariant>['theme']>
