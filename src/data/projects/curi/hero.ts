import type { HeroData } from '@/data/types/curi/hero.types.ts'

export const curiHeros: HeroData[] = [
  {
    id: 1,
    badge: '반려동물 기록 앱',
    title: '기록하지 않던 사용자가 \n 매일 기록하는 앱이 되기까지',
    description:
      '941건 리뷰 분석과 설문으로 문제를 정의하고, 기록 진입 / 꾸미기 / 피드 \n세 단계를 개선해 전환율을 2배 끌어올렸습니다.',
    badgeText: ['진저나인', '2022-2024'],
    image: '/images/smols/mockups/hero-mockup.png',
    meta: [
      { label: 'ROLE', values: ['UX Research ', '/ UI Design'] },
      { label: 'DURATION', values: ['2022.05 -', '2024.08'] },
      { label: 'TOOLS', values: ['Figma ', '/ Principle'] },
      { label: 'TEAM', values: ['Designer 1인'] },
    ],
  },
]
