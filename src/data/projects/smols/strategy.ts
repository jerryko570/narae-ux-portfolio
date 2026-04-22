import type {
  StrategyItem,
  UxStrategy,
  Transformation,
} from '../../types/smols'

// ─── 인사이트 요약 ───────────────────────────────────────────
export const smolsInsightSummary: { description: string } = {
  description:
    '기록 기능이 아니라,\n기록을 지속하게 만드는 경험이 필요했습니다.',
}

// ─── 전략 카드 (기존 경험 / 개선된 경험) ─────────────────────
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

// ─── UX 전략 3단계 ───────────────────────────────────────────
export const smolsUxStrategy: UxStrategy = {
  items: [
    {
      numbering: '기록 진입',
      title: '탐색 중에도 바로 기록으로',
      description: '상단 CTA로 Viewer·Writer 분리 \n이탈 지점을 전환점으로',
    },
    {
      numbering: '기록 과정',
      title: '빠르게, 군더더기 없이',
      description: '키패드 즉시 노출 + 옵션 제거로 \n흐름 단순화',
    },
    {
      numbering: '재방문 유도',
      title: '꾸미기로 다시 돌아오게',
      description: '바텀시트 핸들로 꾸미기 자유도 확장 \n재미 → 재방문 유도',
    },
  ],
}

// ─── UX Principles — Sticky 스크롤 영상 데이터 ───────────────
export const smolsUxPrinciples = [
  {
    id: 'solution',
    title: '탐색이 기록으로 \n이어지다',
    desc: '탐색 중 기록으로 바로 이어지도록\n상단 CTA와 하단 탭 버튼을 개선했습니다.\n\n탐색 중 60% 이탈 지점에서 진입 구조를 바꿨습니다.',
    video: {
      before: { src: '/images/smols/movie/solution-as-is.mp4' },
      after: { src: '/images/smols/movie/solution-to-be.mp4' },
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
  },
  {
    id: 'sticker',
    title: '표현의 제약을 \n없애다',
    desc: '제한된 편집 영역을 벗어나\n자유롭게 꾸밀 수 있게 했습니다.\n\n꾸미기 불만이 44.5%로 가장 많은 Pain Point였습니다.',
    video: {
      before: { src: '/images/smols/movie/sticker-as-is.mp4' },
      after: { src: '/images/smols/movie/sticker-to-be.mp4' },
    },
    asIsImage: {
      src: '/images/smols/mockups/sticker-as-is-prototype.png',
      imageWidth: 300,
      imageHeight: 400,
    },
    toBeImage: {
      src: '/images/smols/mockups/sticker-to-be-prototype.png',
      imageWidth: 300,
      imageHeight: 400,
    },
  },
]

// ─── Transformation (AS-IS / TO-BE 텍스트) ───────────────────
export const smolsTransformations: Transformation[] = [
  {
    center: '전환 중심 설계',
    before: {
      label: 'AS-IS',
      title: '탐색 → 기록 전환 단절 구조',
      description: '탐색은 이루어지지만,\n기록으로 이어지지 않습니다.',
    },
    after: {
      label: 'TO-BE',
      title: '기록 전환 구조',
      description:
        '기존 기록 진입은 다른 메뉴를 거쳐야 했습니다.\n상단 CTA와 하단 탭 중앙 버튼을 추가해\n기록 접근성을 높였습니다.',
    },
    insights: { text: '탐색 → 기록 전환' },
  },
  {
    center: '표현 확장 구조',
    before: {
      label: 'AS-IS',
      title: '제한된 편집 구조',
      description:
        '스티커는 제한된 영역 내에서만 이동 가능하고\n아이템 탐색도 좌우 스크롤에 의존해\n자유로운 꾸미기가 어렵습니다.',
    },
    after: {
      label: 'TO-BE',
      title: '확장된 편집 구조',
      description:
        '전체 영역에서 자유롭게 배치하고 확장형 패널로 \n다양한 아이템을 한 번에 탐색할 수 있습니다.\n\n확장 가능한 구조로 기능 추가에도 대응할 수 있도록 개선했습니다.',
    },
    insights: { text: '자유로운 \n표현' },
  },
]

// ─── Problem Metrics Stats ───────────────────────────────────
export const smolsProblemStats = [
  { value: '45초', label: '평균 체류 시간' },
  { value: '60%', label: '1주 이탈율' },
  { value: '15%', label: '기록 전환율' },
]
