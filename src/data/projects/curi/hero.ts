import type { HeroData } from '@/data/types/curi/hero.types.ts'

export const curiHeros: HeroData[] = [
  {
    id: 1,
    badge: '학생 참여형 교육 서비스',
    title: '4번 눌러야 했던 질문을 \n1번으로 줄이기까지',
    description:
      '학생이 튜터에게 직접 묻고 답을 받는 서비스. 하지만 질문까지의 흐름이 복잡했습니다. \n설문조사로 사용 패턴을 파악하고, 질문 진입 단계를 50% 줄여 마찰을 없앴습니다.',
    badgeText: ['플랫비', '2020-2022'],
    image: '/images/smols/mockups/hero-mockup.png',
    meta: [
      { label: 'ROLE', values: ['UX Research ', '/ UI Design'] },
      { label: 'DURATION', values: ['2020.12 -', '2022.04'] },
      { label: 'TOOLS', values: ['Figma ', '/ Principle'] },
      { label: 'TEAM', values: ['Designer 1인'] },
    ],
  },
]
