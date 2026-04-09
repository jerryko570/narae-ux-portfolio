import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'flex cursor-pointer items-center rounded-full',
  {
    variants: {
      variant: {
        primary: 'bg-orange-500 text-white hover:bg-orange-600',
        outline:
          'border border-orange-500 bg-white text-orange-500 hover:bg-orange-50',
        ghost: 'bg-gray-200 hover:bg-gray-300',
        secondary: 'bg-gray-900 text-white hover:bg-gray-600',
        white: 'bg-white text-gray-900 hover:bg-gray-50',
      },
      size: {
        lg: 'h-12 px-6 text-lg font-semibold',
        md: 'h-10 px-5 text-sm font-medium',
        sm: 'h-8 px-4 text-sm font-medium',
      },
      width: {
        fit: 'w-fit',
        full: 'w-full justify-center',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      width: 'fit',
    },
  }
)
