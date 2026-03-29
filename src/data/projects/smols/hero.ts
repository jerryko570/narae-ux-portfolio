import type { HeroData } from '../../types'

export const smolsHeros: HeroData[] = [
  {
    id: 1,
    badge: 'GOAL',
    badgeText: '기록이 이어지는 경험 설계',
    title: '정보 탐색을 \n 기록 경험으로',
    description:
      '964건의 리뷰 분석 결과, \n 사용자는 탐색보다 기록과 꾸미기를 원했습니다.',
    image: '/images/smols/mockups/hero-mockup.png',
    meta: [
      { label: 'ROLE', values: ['UX Research', 'UI Design'] },
      { label: 'DURATION', values: ['2023.03~', '2024.01'] },
      { label: 'TOOLS', values: ['Figma', 'FigJam'] },
      { label: 'TEAM', values: ['1 Designer'] },
    ],
  },
]
