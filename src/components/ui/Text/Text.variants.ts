import { cva } from 'class-variance-authority'

export const textVariant = cva('', {
  variants: {
    as: {
      display: 'text-[5.25rem] leading-[1.2] font-extrabold', // 84px
      h1: 'text-[4.375rem] leading-[1.2] font-bold', // 70px
      h2: 'text-[3rem] leading-[1.3] font-bold', // 48px
      h3: 'text-[2.25rem] leading-[1.3] font-semibold', // 36px
      h4: 'text-[1.5rem] leading-[1.5] font-semibold', // 24px
      h5: 'text-[1.25rem] leading-[1.5] font-medium', // 20px
      p: 'text-[1rem] leading-[1.7] font-normal', // 16px
      span: 'text-[0.875rem] leading-[1.4] font-normal', // 14px
    },
  },
  defaultVariants: {
    as: 'p',
  },
})
