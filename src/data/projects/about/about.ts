export const aboutHero = {
  title: '시각화와 사용성을 넘어\n구조를 이해하는\nUX 디자이너',
  description:
    '14년간 다양한 도메인에서 UI·UX 디자인을 해왔습니다.\n개발을 배우며 재사용 가능한 컴포넌트와 데이터 흐름을 이해하게 됐고,\n디자인이 어떻게 구현되는지를 알고 설계하는 디자이너가 됐습니다.',
  awards: [
    {
      year: '2013',
      label: '🍎 Apple Featured',
      description:
        'Gridplay 앱 아이폰 메인 피처드 및 베스트 앱 어워드 수상 \n(미국·태국 외)',
    },
    {
      year: '2012',
      label: '&Award',
      description: '삼성 갤럭시카메라 Facebook 프로모션 Digital AD 부문 수상',
    },
  ],
}

export const aboutStrengths = [
  {
    number: 1,
    title: '구현을 이해하고 설계합니다',
    description: '구조를 이해하고 재사용 가능한 UI를  \n설계합니다.',
    badgeTheme: 'blue',
  },
  {
    number: 2,
    title: '데이터로 문제를 정의합니다',
    description: 'VOC 964건 분석으로 사용자 흐름을\n 개선합니다.',
    badgeTheme: 'blue',
  },
  {
    number: 3,
    title: '계속 확장하고 있습니다',
    description: '컴포넌트 구현부터 API까지, 이해의 폭을 \n넓혀갑니다.',
    badgeTheme: 'blue',
  },
] as const

export const aboutBot = {
  badge: 'AI IMPLEMENTATION',
  title: '🤖 나래봇 포트폴리오 AI 어시스턴트',
  description:
    '방문자가 나래님의 작업과 커리어에 대해\n직접 대화할 수 있는 AI 어시스턴트입니다.\nClaude API와 Next.js를 활용해 직접 구현했습니다.',
  cta: '나래봇과 대화하기',
  features: [
    { label: 'Claude API', desc: 'AI 답변 생성 엔진' },
    { label: 'Next.js API Route', desc: '서버 통신 직접 구현' },
    { label: 'Streaming', desc: '실시간 타이핑 효과' },
    { label: '지식베이스', desc: '포트폴리오 내용을 AI에 학습' },
  ],
}
