import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

export const CardVariant = cva('flex rounded-lg p-10', {
  variants: {
    theme: {
      dark: 'bg-gray-800 text-white',
      gray: 'bg-gray-100 text-black',
      white: 'bg-white text-gray-900',
      lightOrange: 'bg-orange-50 text-gray-900',
      sky: 'bg-blue-500 text-white',
      lightSky: 'bg-blue-200 text-gray-900',
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

// ─── ComparisonCard variants ────────────────────────────────
export const ComparisonCardVariant = cva(
  'flex-1 overflow-hidden rounded-lg border',
  {
    variants: {
      variant: {
        before: 'border-transparent',
        after: 'border-orange-500',
      },
    },
    defaultVariants: {
      variant: 'before',
    },
  }
)

export const ComparisonCardHeader = cva(
  'px-6 py-3 text-sm font-semibold tracking-wider',
  {
    variants: {
      variant: {
        before: 'bg-gray-200 text-gray-400',
        after: 'bg-orange-500 text-white',
      },
    },
    defaultVariants: {
      variant: 'before',
    },
  }
)

export const ComparisonCardIcon = cva('', {
  variants: {
    variant: {
      before: 'text-gray-900',
      after: 'text-gray-900',
    },
  },
  defaultVariants: {
    variant: 'before',
  },
})

export const ComparisonCardText = cva('text-base', {
  variants: {
    variant: {
      before: 'text-gray-900',
      after: 'text-gray-900',
    },
  },
  defaultVariants: {
    variant: 'before',
  },
})

export const ComparisonCardHighlight = cva('font-semibold', {
  variants: {
    variant: {
      before: 'text-gray-900',
      after: 'text-gray-900',
    },
  },
  defaultVariants: {
    variant: 'before',
  },
})

export type ComparisonVariant = NonNullable<
  VariantProps<typeof ComparisonCardVariant>['variant']
>
