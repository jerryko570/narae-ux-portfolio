import { cva } from 'class-variance-authority'

export const textVariant = cva('', {
  variants: {
    as: {
      display:
        'text-[clamp(2.625rem,5.5vw,5.25rem)] leading-[1.3] font-extrabold', // 42 → 84px
      h1: 'text-[clamp(2.75rem,3.5vw,4.375rem)] leading-[1.2] font-bold', // 44 → 70px
      h2: 'text-[clamp(1.5rem,2.8vw,2.25rem)] leading-[1.3] font-bold', // 24 → 36px
      h3: 'text-[clamp(1.25rem,2.2vw,1.875rem)] leading-[1.5] font-semibold', // 20 → 30px
      h4: 'text-[clamp(1rem,1.8vw,1.5rem)] leading-[1.7] font-medium', // 16 → 24px
      h5: 'text-[clamp(0.875rem,1.4vw,1.25rem)] leading-[1.5] font-medium', // 14 → 20px
      p: 'text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.6] font-normal', // 14 → 16px
      span: 'text-[clamp(0.75rem,0.9vw,0.875rem)] leading-[1.4] font-normal', // 12 → 14px
    },
  },
  defaultVariants: {
    as: 'p',
  },
})
