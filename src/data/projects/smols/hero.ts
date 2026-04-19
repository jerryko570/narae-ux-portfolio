import type { HeroData } from '@/data/types/smols/hero.types.ts'

export const smolsHeros: HeroData[] = [
  {
    id: 1,
    badge: 'UX CASE STUDY',
    title: '탐색을 기록으로 \n 전환하는 구조 설계',
    badgeText: ['반려동물 기록 앱', '서포터즈 941건'],
    image: '/images/smols/mockups/hero-mockup.png',
    meta: [
      { label: 'ROLE', values: ['UX Research', 'UI Design'] },
      { label: 'DURATION', values: ['2023.03~', '2024.01'] },
      { label: 'TOOLS', values: ['Figma', 'Principle'] },
      { label: 'TEAM', values: ['1 Designer'] },
    ],
  },
]
