import type { StrategyItem, UxStrategy, Transformation } from '../../types'

export const smolsInsightSummary: { description: string } = {
  description:
    '기록 기능이 아니라,\n기록을 지속하게 만드는 경험이 필요했습니다.',
}

export const smolsStrategy: StrategyItem[] = [
  {
    title: '기존 경험',
    description: '탐색은 있었지만, \n기록은 남지 않았습니다.',
    image: '/images/smols/strategy-charts/smols-strategy-before-flow.png',
    imageWidth: 400,
    imageHeight: 500,
  },
  {
    title: '개선된 경험',
    description: '기록이 다시 피드로 \n이어지는 반복 경험을 만들었습니다.',
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
      description: '정보 구조 개선\n탐색 중 즉시 기록',
    },
    {
      number: 2,
      title: '빠른 기록 시작',
      description: '상단 CTA 배치\n최소 입력 구조',
    },
    {
      number: 3,
      title: '꾸미기로 반복 유도',
      description: '꾸미기 과정 단순화\n편집 요소로 기록의 재미 강화',
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
  center: '탐색에서 기록으로',
  before: {
    label: 'AS-IS',
    title: '탐색 → 기록 전환 단절 구조',
    description: '탐색은 이루어지지만,\n기록으로 이어지지 않습니다.',
  },
  after: {
    label: 'TO-BE',
    title: '기록 전환 구조',
    description:
      '상단 CTA는 진입 시 기록 의도를 형성하고,\n하단 CTA는 탐색 중 행동 전환을 유도합니다.\n\n탐색 중 기록으로 자연스럽게\n전환되도록 설계했습니다.',
  },
  insights: [
    { text: '탐색 중\n전환 설계', position: 'top' },
    { text: '상단 CTA로\n기록 시작', position: 'bottom' },
  ],
}

export const smolsSticker: Transformation = {
  center: '자유로운 꾸미기',
  before: {
    label: 'AS-IS',
    title: '표현이 제한된 구조',
    description: '표현이 제한되어\n자유롭게 꾸밀 수 없습니다.',
  },
  after: {
    label: 'TO-BE',
    title: '표현이 확장된 구조',
    description:
      '스티커를 자유롭게 배치하고,\n크기와 위치를 직접 조정할 수 있도록 개선했습니다.\n\n편집 흐름을 보완해\n표현 경험을 강화했습니다.',
  },
  insights: [
    { text: '표현 자유도\n확장', position: 'top' },
    { text: '편집 흐름\n보완', position: 'bottom' },
  ],
}
