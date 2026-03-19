import { cva } from 'class-variance-authority'

export const textVariant = cva('', {
  variants: {
    as: {
      h1: 'text-[clamp(1.875rem,4vw,3rem)] leading-snug font-bold', // 30 → 48px
      h2: 'text-[clamp(1.5rem,3.5vw,2.25rem)] leading-snug font-bold', // 24 → 36px
      h3: 'text-[clamp(1.25rem,3vw,1.875rem)] leading-snug font-semibold', // 20 → 30px
      h4: 'text-[clamp(1.125rem,2.5vw,1.5rem)] font-semibold', // 18 → 24px
      h5: 'text-[clamp(1rem,2vw,1.25rem)] font-medium', // 16 → 20px
      p: 'text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed font-normal', // 14 → 16px
      span: 'text-[clamp(0.75rem,1vw,0.875rem)] font-normal', // 12 → 14px
    },
  },
  defaultVariants: {
    as: 'p',
  },
})
