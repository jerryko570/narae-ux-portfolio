import { cva } from 'class-variance-authority'

export const textVariant = cva('', {
  variants: {
    as: {
      display:
        'text-[clamp(2.625rem,5.5vw,5.25rem)] leading-[1.3] font-extrabold', // 42 → 84px | 행간 1.3
      h1: 'text-[clamp(2rem,3.5vw,3rem)] leading-[1.2] font-bold', // 32 → 48px | 행간 1.2
      h2: 'text-[clamp(1.5rem,2.8vw,2.25rem)] leading-[1.3] font-bold', // 24 → 36px | 행간 1.3
      h3: 'text-[clamp(1.25rem,2.2vw,1.875rem)] leading-[1.5] font-semibold', // 20 → 30px | 행간 1.5
      h4: 'text-[clamp(1rem,1.8vw,1.5rem)] leading-[1.7] font-medium', // 16 → 24px | 행간 1.7
      h5: 'text-[clamp(0.875rem,1.4vw,1.25rem)] leading-[1.5] font-medium', // 14 → 20px | 행간 1.5
      p: 'text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.6] font-normal', // 14 → 16px | 행간 1.6
      span: 'text-[clamp(0.75rem,0.9vw,0.875rem)] leading-[1.4] font-normal', // 12 → 14px | 행간 1.4
    },
  },
  defaultVariants: {
    as: 'p',
  },
})
