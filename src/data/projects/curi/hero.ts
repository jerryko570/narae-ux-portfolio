import type { HeroData } from '@/data/types/curi/hero.types.ts'

export const curiHeros: HeroData[] = [
  {
    id: 1,
    badge: '학생 참여형 교육 서비스 앱',
    title: '4번 눌러야 했던 질문을 \n1번으로 줄이기까지',
    description:
      '1:1 튜터에게 모르는 수학문제를 물어보거나 사진으로 해답을 받는 것이 서비스의 핵심이지만, \n질문까지의 흐름이 복잡했습니다. 설문조사로 사용 패턴을 정의하고 진입 단계를 50% 줄여, \n학생이 막히는 순간 바로 질문할 수 있게 했습니다.',
    badgeText: ['플랫비', '2020-2022'],
    image: '/images/curi/mockups/hero-mockup.png',
    meta: [
      { label: 'ROLE', values: ['UX Research ', '/ UI Design'] },
      { label: 'DURATION', values: ['2020.12 -', '2022.04'] },
      { label: 'TOOLS', values: ['Figma ', '/ Principle'] },
      { label: 'TEAM', values: ['Designer 1인'] },
    ],
  },
]
