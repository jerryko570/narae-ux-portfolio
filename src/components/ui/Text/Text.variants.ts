import { cva } from 'class-variance-authority'

export const textVariant = cva('', {
  variants: {
    as: {
      h1: 'text-5xl leading-snug font-bold', // 48px
      h2: 'text-4xl leading-snug font-bold', // 36px
      h3: 'text-3xl leading-snug font-semibold', // 30px
      h4: 'text-2xl font-semibold', // 24px
      h5: 'text-xl font-medium', // 20px
      p: 'text-sm leading-loose font-normal', // 14px
      span: 'text-xs font-normal', // 12px
    },
  },
  defaultVariants: {
    as: 'p',
  },
})
