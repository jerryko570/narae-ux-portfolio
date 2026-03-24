import type { HeroData, SectionData } from './types'

export const smolsHeros: HeroData[] = [
  {
    id: 1,
    badge: 'GOAL',
    badgeText: '사용자의 기록 참여율을 개선한다.',
    title: '정보 탐색에서 \n 기록 중심 경험으로',
    description:
      '3,000명 이상의 사용자 데이터를 기반으로 \n 참여 경험을 재설계한 과정.',
    image: '/images/smols-hero-mockup.png',
    meta: [
      { label: 'ROLE', values: ['UX Research', 'UI Design'] },
      { label: 'DURATION', values: ['2023.03~', '2024.01'] },
      { label: 'TOOLS', values: ['Figma', 'FigJam'] },
      { label: 'TEAM', values: ['1 Designer'] },
    ],
  },
]

export const smolsSections: Record<string, SectionData> = {
  overview: {
    type: 'background',
    badge: 'BACKGROUND',
    title: '정보 탐색 중심 \n 스몰스',
    description:
      '스몰스는 정보 탐색을 핵심으로 MVP를 출시했지만 \n 사용자 참여율은 기대에 미치지 못했습니다.',
    align: 'center',
  },

  problemEvidence: {
    type: 'keyMetric',
    badge: 'KEY METRICS',
    title: '데이터로 확인된 문제',
    align: 'center',
    stat: {
      description:
        '사용자 절반 이상이 1주일 내 이탈했습니다. 참여가 지속되지 않았습니다.',
      items: [
        {
          value: '45초',
          label: '정보 탐색시간',
          goal: '기록 행동으로 이어지지 않음.',
        },
        { value: '60%', label: '1주 이탈률', goal: '목표: 30% 이하' },
        { value: '15%', label: '기록 전환율', goal: '목표: 50% 이상' },
      ],
    },
  },

  userResearch: {
    type: 'insight',
    badge: 'INSIGHT',
    title: '정보보다 \n 기록과 교감',
    description:
      '사용자는 정보를 소비하는 것보다\n자신의 반려동물을 기록하고\n교감하는 경험을 더 중요하게 여겼습니다.\n\n기록과 댓글, 좋아요 등 다양한 행동이\n동일한 UI 레벨에서 제공되어\n사용자가 무엇을 해야 할지 명확하지 않았습니다.\n\n그 결과, 사용자는 콘텐츠를 소비하는 흐름에 머무르게 되었고\n기록과 참여 행동으로의 전환이 발생하지 않았습니다.',
    align: 'left',
    titleSize: 'h1',
    highlight:
      '사용자 인터뷰와 설문 데이터를 통해 반려동물 기록 경험에서의\n핵심 니즈와 주요 Pain Point를 도출했습니다.',
  },
}
