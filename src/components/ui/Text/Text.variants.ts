import { cva } from 'class-variance-authority'

export const textVariant = cva('', {
  variants: {
    as: {
      display: 'text-[4.5rem] leading-[1.2] font-extrabold', // 72px  (×9)
      h1: 'text-[4rem] leading-[1.2] font-bold', // 64px  (×8)
      h2: 'text-[3rem] leading-[1.3] font-bold', // 48px  (×6)
      h3: 'text-[2.5rem] leading-[1.3] font-semibold', // 40px  (×5)
      h4: 'text-[2rem] leading-[1.4] font-semibold', // 32px  (×4)
      h5: 'text-[1.75rem] leading-[1.5] font-medium', // 28px  (×3.5)
      h6: 'text-[1.5rem] leading-[1.5] font-medium', // 24px  (×3)
      p: 'text-[1rem] leading-[1.8] font-normal', // 16px  (×2)
      caption: 'text-[0.875rem] leading-[1.4] font-normal', // 14px
    },
  },
  defaultVariants: {
    as: 'p',
  },
})
