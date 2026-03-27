import type { HeroData } from '../../types'

export const smolsHeros: HeroData[] = [
  {
    id: 1,
    badge: 'GOAL',
    badgeText: '기록 행동을 만드는 경험 설계',
    title: '정보 탐색에서 \n 기록으로',
    description:
      '964건의 사용자 리뷰를 분석해 \n 기록 경험의 문제를 재정의했습니다.',
    image: '/images/smols/mockups/hero-mockup.png',
    meta: [
      { label: 'ROLE', values: ['UX Research', 'UI Design'] },
      { label: 'DURATION', values: ['2023.03~', '2024.01'] },
      { label: 'TOOLS', values: ['Figma', 'FigJam'] },
      { label: 'TEAM', values: ['1 Designer'] },
    ],
  },
]
