import type { HeroData } from '@/data/types/smols/hero.types.ts'

export const smolsHeros: HeroData[] = [
  {
    id: 1,
    badge: 'GOAL',
    badgeText: '기록이 이어지는 경험 설계',
    title: '탐색을 기록으로 \n 전환하는 구조 설계',
    description:
      '964건의 사용자 리뷰 분석 결과,\n사용자는 정보 소비보다 기록과 꾸미기 경험을 원했습니다.',
    image: '/images/smols/mockups/hero-mockup.png',
    meta: [
      { label: 'ROLE', values: ['UX Research', 'UI Design'] },
      { label: 'DURATION', values: ['2023.03~', '2024.01'] },
      { label: 'TOOLS', values: ['Figma', 'FigJam'] },
      { label: 'TEAM', values: ['1 Designer'] },
    ],
  },
]
