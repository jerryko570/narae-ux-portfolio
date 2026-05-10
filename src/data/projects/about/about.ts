// ─── About 페이지 데이터 ──────────────────────────────────────

// ─── 히어로 (타이틀 + 설명 + 수상) ────────────────────────────
export const aboutHero = {
  title: '시각화와 사용성을 넘어\n구조를 이해하는\nUX 디자이너',
  description:
    '14년간 다양한 도메인에서 UI·UX 디자인을 해왔습니다.\n개발을 배우며 재사용 가능한 컴포넌트와 데이터 흐름을 이해하게 됐고,\n디자인이 어떻게 구현되는지를 알고 설계하는 디자이너가 됐습니다.',
  awards: [
    {
      year: '2014',
      label: '🍎 Apple Featured',
      description:
        'Gridplay 앱 아이폰 메인 피처드 및\n 🏆 베스트 앱 어워드 수상 (미국·태국 외)',
      link: {
        label: 'AppStore에서 보기',
        url: 'https://apps.apple.com/us/app/gridplay/id861216052',
      },
    },
    {
      year: '2012',
      label: '&Award',
      description: '삼성 갤럭시카메라 Facebook 프로모션\nDigital AD 부문 수상',
      link: null,
    },
  ],
}

// ─── 이런 디자이너입니다 (3가지 강점) ─────────────────────────
export const aboutStrengths = [
  {
    number: '1',
    title: '구현을 이해하고 설계합니다',
    description:
      '2025-26 코드잇 프론트엔드 부트캠프 수료. \n본 사이트와 나래봇을 React/Next.js로 직접 빌드했고, 디자인이 코드로 이어지는 흐름을 \n이해합니다.',
    badgeTheme: 'blue',
  },
  {
    number: '2',
    title: '데이터로 문제를 정의합니다',
    description:
      '스몰스 리뷰 941건을 분석해 기록 전환율을 15%에서 32%로 끌어올렸고, 큐리에서는 \n사용자 패턴을 바탕으로 질문 단계를 \n4단계에서 2단계로 압축했습니다.',
    badgeTheme: 'blue',
  },
  {
    number: '3',
    title: '계속 확장하고 있습니다',
    description:
      ' 진저나인·플랫비에서 색·타이포·간격 규칙을 \n 정리해왔고, 이 사이트는 그 규칙을 Tailwind로 옮겨 디자인과 코드가 어긋나지 않도록 \n설계했습니다.',
    badgeTheme: 'blue',
  },
] as const

// ─── 블로그 자동화 파이프라인 ─────────────────────────────────
export const aboutBlog = {
  badge: 'AUTOMATION',
  title: '✏️ 1일마다 쌓이는 학습 파이프라인',
  description:
    '디자인·개발·AI는 매일 새로운 게 쏟아집니다.\n1일마다 최신 소식을 자동 수집하고\n블로그로 기록되도록 구축했습니다.',
  cta: '깃 블로그 구경가기',
  features: [
    { label: 'GitHub Actions', desc: '1일마다 자동 실행' },
    { label: 'RSS Feed', desc: '최신 소식 자동 수집' },
    { label: 'Jekyll', desc: '마크다운 → 정적 사이트' },
    { label: 'Chirpy Theme', desc: '기술 블로그 템플릿' },
  ],
}

// ─── 나래봇 (AI 어시스턴트) ───────────────────────────────────
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
