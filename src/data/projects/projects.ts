import type { HeroData, SectionData, FeedbackData } from '../types'

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

export const smolsSections: Record<string, SectionData> = {
  overview: {
    type: 'background',
    badge: 'BACKGROUND',
    title: '정보 탐색에 머문 \n 스몰스',
    description:
      '정보 탐색 중심으로 설계되었지만,\n기록은 행동으로 이어지지 않았습니다.',
    align: 'center',
  },

  problemMetrics: {
    type: 'metrics',
    badge: 'KEY METRICS',
    title: '데이터로 확인된 문제',
    align: 'center',
    metrics: {
      description: '사용자는 정보를 탐색했지만, 기록으로 이어지지 않았습니다.',
      items: [
        { value: '45초', label: '정보 탐색시간', insight: '탐색에 머무름' },
        { value: '60%', label: '1주 이탈률', insight: '초기 사용 이후 이탈' },
        { value: '15%', label: '기록 전환율', insight: '핵심 기능 사용 낮음' },
      ],
    },
  },

  userInsight: {
    type: 'insight',
    badge: 'INSIGHT',
    title: '정보보다 \n 기록과 꾸미기',
    description:
      '사용자는 정보를 소비하기보다\n반려동물을 기록하고 꾸미는 경험을 기대했습니다.\n\n그러나 기록 과정은 번거롭고,\n꾸미기 기능은 충분히 제공되지 않았습니다.\n\n이로 인해 기록은 반복되지 않았고,\n서비스는 탐색 중심으로 머물렀습니다.',
    align: 'left',
    titleSize: 'h1',
    image: '/images/smols/research/user-research-chat.png',
    researchSummary: {
      who: {
        title: '조사 대상 (Who)',
        data: '118명',
        subtitle: '서비스 서포터즈 참여자 (4~6기 기준)',
        description: '',
        subdescription: '',
      },
      what: {
        title: '핵심 발견 (What)',
        data: '80%',
        subtitle: '기록 목적 사용',
        description: '',
        subdescription: '',
      },
      highlight: '기록·꾸미기 사용 54.8%',
    },
  },

  feedbackAnalysis: {
    type: 'research',
    badge: 'USER FEEDBACK',
    title: '기록하고 싶었지만,\n꾸미기가 부족했습니다',
    align: 'left',
    description: '',
  },

  strategy: {
    type: 'research',
    badge: 'PRODUCT STRATEGY',
    title: '기록 중심 구조로\n 경험을 전환',
    align: 'left',
  },
  uxStrategy: {
    type: 'research',
    badge: 'UX STRATEGY',
    title: '기록 경험 중심 UX 설계',
    description:
      '기록은 입력이 아니라 경험입니다. \n 경험이 반복되도록 흐름을 설계했습니다. ',
    align: 'left',
  },
}

export const smolsFeedbackData: FeedbackData = {
  left: {
    icon: '/images/smols/icons/app-icon.png',
    title: '서포터즈 피드백 분석',
    count: '(941건 · 서포터즈 4~6기)',
    description:
      '사용자의 80%는 기록을 목적으로 앱을 사용했지만,\n기록을 지속하지 못한 가장 큰 이유는\n꾸미기 경험 부족(44.5%)이었습니다.',
    link: { label: '리뷰 데이터 살펴보기', url: '/smols-reviews' },
  },
  right: {
    title: 'UX Pain Points',
    unit: '(기타 카테고리 제외)',
    items: [
      { label: '꾸미기 기능 부족', value: 44.5 },
      { label: '앱 성능 및 안정성', value: 39.2 },
      { label: '기록 경험 불편', value: 10.0 },
      { label: '소통 기능 부족', value: 6.3 },
    ],
  },
}

export const smolsReviewPageContent = {
  title: '서포터즈 피드백 원문 데이터',
  description:
    '서포터즈 4~6기 피드백을 UX 관점으로 재분류하고, 사용자가 직접 탐색할 수 있는 인터페이스를 구현했습니다.',
  downloadLabel: 'CSV 원본 다운로드',
  loadingText: '리뷰 데이터를 불러오는 중...',
  listTitle: '리뷰 데이터',
}

export const smolsReviewSummary = {
  title: '핵심 요약',
  description:
    '사용자 피드백을 종합해보면, 기록 자체보다 꾸미기 경험의 부족이 주요 문제로 나타났습니다.',
  items: [
    { title: '가장 큰 문제', value: '44.5%', label: '꾸미기 기능 부족' },
    { title: '두 번째 문제', value: '39.2%', label: '앱 성능/안정성' },
    { title: '핵심 인사이트', value: '기록은 OK', label: '문제는 꾸미기 경험' },
  ],
}

export const smolsReviewCategories = [
  '전체',
  '꾸미기 기능 부족',
  '앱 성능/안정성',
  '기록 경험 불편',
  '소통 기능 부족',
  '기타',
] as const

export const smolsReviewCategoryTheme = {
  '꾸미기 기능 부족': 'blue',
  '앱 성능/안정성': 'orange',
  '기록 경험 불편': 'dark',
  '소통 기능 부족': 'white',
  기타: 'dark',
} as const

export const smolsInsightSummary = {
  description:
    '기록 기능이 아니라, 기록을 지속하게 만드는 경험이 필요했습니다.',
}

export const smolsStrategy = [
  {
    title: '기존 경험',
    description: '탐색은 했지만, 기록은 남지 않았습니다.',
    image: '/images/smols/strategy-charts/smols-strategy-before-flow.png',
    imageWidth: 500,
    imageHeight: 600,
  },
  {
    title: '개선된 경험',
    description: '기록이 반복되는 경험을 만들었습니다.',
    image: '/images/smols/strategy-charts/smols-strategy-after-flow.png',
    imageWidth: 500,
    imageHeight: 600,
  },
]

export const smolsUxStrategy = {
  items: [
    {
      number: 1,
      title: '탐색을 기록으로 연결',
      description: '콘텐츠 정보 구조 개선 \n 탐색 중 바로 기록 가능',
    },
    {
      number: 2,
      title: '기록을 빠르게 시작',
      description:
        '기록 작성 CTA를 주요 화면 상단 배치 \n 최소 입력으로 빠른 기록 시작',
    },
    {
      number: 3,
      title: '꾸미기로 기록 반복 유도',
      description: '꾸미기 UX 단순화 \n 스티커·편집으로 재미 강화',
    },
  ],
}
