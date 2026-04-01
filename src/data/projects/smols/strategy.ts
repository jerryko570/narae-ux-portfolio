import type { StrategyItem, UxStrategy, Transformation } from '../../types'

export const smolsInsightSummary: { description: string } = {
  description:
    '기록 기능이 아니라, 기록을 지속하게 만드는 경험이 필요했습니다.',
}

export const smolsStrategy: StrategyItem[] = [
  {
    title: '기존 경험',
    description: '탐색은 했지만, 기록은 남지 않았습니다.',
    image: '/images/smols/strategy-charts/smols-strategy-before-flow.png',
    imageWidth: 400,
    imageHeight: 500,
  },
  {
    title: '개선된 경험',
    description: '기록이 반복되는 경험을 만들었습니다.',
    image: '/images/smols/strategy-charts/smols-strategy-after-flow.png',
    imageWidth: 400,
    imageHeight: 500,
  },
]

export const smolsUxStrategy: UxStrategy = {
  items: [
    {
      number: 1,
      title: '탐색 → 기록 전환',
      description: '정보 구조 개선 \n 탐색 중 즉시 기록',
    },
    {
      number: 2,
      title: '빠른 기록 시작',
      description: '상단 CTA 배치 \n최소 입력 구조',
    },
    {
      number: 3,
      title: '꾸미기로 반복 유도',
      description: '꾸미기 UX 단순화 \n 편집 · 스티커로 재미 강화',
    },
  ],
}

export const smolsUxPrinciple = {
  video: {
    before: {
      src: '/images/smols/movie/as-is.mp4',
      className: 'w-70 rounded-xl',
    },
    after: {
      src: '/images/smols/movie/to-be.mp4',
      className: 'w-70 rounded-xl',
    },
  },
  asIsImage: {
    src: '/images/smols/mockups/as-is-prototype.png',
    imageWidth: 300,
    imageHeight: 400,
  },
  toBeImage: {
    src: '/images/smols/mockups/to-be-prototype.png',
    imageWidth: 300,
    imageHeight: 400,
  },
}

export const smolsTransformation: Transformation = {
  center: '탐색 → 기록',
  before: {
    label: 'AS-IS',
    title: '탐색 → 기록 전환이 단절된 구조',
    description: '탐색은 이루어지지만,\n기록으로 이어지지 않습니다.',
  },
  after: {
    label: 'TO-BE',
    title: '기록 전환 구조',
    description:
      '상단 CTA는 진입 시 기록 의도를 형성하고, \n하단 CTA는 탐색 중 행동 전환을 유도합니다. \n\n탐색 중 기록으로 자연스럽게 \n전환되도록 설계했습니다.',
  },
  insights: [
    { text: '탐색 중 \n전환 설계', position: 'top' },
    { text: '#첫화면에 \n기록 시작', position: 'bottom' },
  ],
}
