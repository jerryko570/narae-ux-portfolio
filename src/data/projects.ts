// hero 데이터
export const smolsHeros = [
  {
    id: 1,
    badge: 'GOAL',
    badgeText: '사용자의 기록 참여율을 개선한다',
    title: '정보 탐색에서 \n 기록 중심 경험으로',
    description:
      '3,000명 이상의 사용자 데이터를 기반으로\n참여 경험을 재설계한 과정',
    image: '/images/smols-hero-mockup.png',
    meta: [
      { label: 'ROLE', values: ['UX Research', 'UI Design'] },
      { label: 'DURATION', values: ['2023.03~', '2024.01'] },
      { label: 'TOOLS', values: ['Figma', 'FigJam'] },
      { label: 'TEAM', values: ['1 Designer'] },
    ],
  },
]

// 섹션 데이터
export const smolsSections = {
  overview: {
    badge: 'SERVICE OVERVIEW',
    title: '서비스 소개',
    description:
      '스몰스는 반려동물의 일상을 기록하고\n다른 보호자들과 경험을 공유할 수 있는 SNS 서비스입니다.',
    align: 'center' as const,
  },

  problemEvidence: {
    badge: 'PROBLEM EVIDENCE',
    title: '문제를 발견하다',
    align: 'center' as const,
    // stat card 데이터
    stat: {
      description: '반려인 10명 중 6명이 1주일 이내 앱 사용을 중단했습니다.',
      items: [
        { value: '15%', label: '기록 완료율', goal: '목표: 50% 이상' },
        { value: '60%', label: '1주 이탈률', goal: '목표: 30% 이하' },
        { value: '45초', label: '평균 기록시간', goal: '목표: 20초 이내' },
      ],
    },
  },

  userResearch: {
    badge: 'USER RESEARCH',
    title: '사용자는 정보보다\n기록과 교감을\n원했습니다',
    description:
      '문제의 원인을 파악하기 위해\n반려동물 앱 서포터즈 322명을 대상으로\n사용자 리서치를 진행했습니다.\n\n또한 기록 작성, 댓글, 좋아요 등 다양한 행동이 동일한\nUI 레벨에서 제공되어 사용자의 행동 우선순위가\n명확하지 않았습니다.',
    align: 'left' as const,
    titleSize: 'h1' as const,
  },
}
