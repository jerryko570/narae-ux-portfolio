import type {
  StrategyItem,
  UxStrategy,
  Transformation,
  UxPrincipleType,
} from '../../types/smols'

// ─── 인사이트 요약 ───────────────────────────────────────────
export const curiInsightSummary: { description: string } = {
  description:
    '기록 기능이 아니라,\n기록을 지속하게 만드는 경험이 필요했습니다.',
}

// ─── 전략 카드 (기존 경험 / 개선된 경험) ─────────────────────
export const curiStrategy: StrategyItem[] = [
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

// ─── UX 전략 3단계 (개선방향)───────────────────────────────────────────
export const curiUxStrategy: UxStrategy = {
  items: [
    {
      numbering: '기록 진입',
      title: '탐색 중에도 바로 기록으로',
      description: '상단 CTA로 Viewer·Writer 분리 \n이탈 지점을 전환점으로',
    },
    {
      numbering: '기록 과정',
      title: '빠르게, 군더더기 없이',
      description:
        '기록 작성 마찰 제거와 꾸미기 자유도 확장.  \n키패드 즉시 노출·옵션 정리·바텀시트 개선으로 완성까지 이탈 없이.',
    },
    {
      numbering: '재방문 유도',
      title: '꾸미기로 다시 돌아오게',
      description: '바텀시트 핸들로 꾸미기 자유도 확장 \n재미 → 재방문 유도',
    },
  ],
}

// ─── UX Principles — AS-IS / TO-BE 비교 데이터 ───────────────
// 순서: [0] 기록 → [1] 꾸미기 → [2] 피드
export const curiUxPrinciples: UxPrincipleType[] = [
  // ─── [0] 기록 진입 ─────────────────────────
  {
    id: 'solution',
    icon: '',
    numbering: '기록 진입',
    quote: '',
    title: '기록은 익숙할수록 지속된다. \n그래서 마찰을 없앴다.',
    keywords: ['키패드 즉시 노출', '불필요 옵션 제거', '작성 우선순위 가이드'],
    asIsImages: [
      {
        src: '/images/smols/mockups/solution-as-is-1.png',
        imageWidth: 300,
        imageHeight: 600,
      },
      {
        src: '/images/smols/mockups/solution-as-is-2.png',
        imageWidth: 300,
        imageHeight: 600,
      },
    ],
    toBeImages: [
      {
        src: '/images/smols/mockups/solution-to-be-1.png',
        imageWidth: 300,
        imageHeight: 600,
      },
      {
        src: '/images/smols/mockups/solution-to-be-2.png',
        imageWidth: 300,
        imageHeight: 600,
      },
    ],
    asIsPoints: [
      {
        highlight: '사진 UI 우선 배치, ',
        text: '글 작성 의도와 시각 위계 불일치',
      },
      { highlight: '필수·선택 필드 혼재, ', text: '입력 우선순위 판단 부담' },
      { text: '부가 옵션(기분·날씨·태그·위치) 상시 노출로 시선 분산' },
    ],
    toBePoints: [
      { highlight: '키패드 즉시 노출, ', text: '제목부터 입력 시작' },
      { highlight: '불필요 옵션 제거, ', text: '사진·꾸미기만 남기고' },
      { highlight: '작성 우선순위 가이드, ', text: '이탈 없이 완성' },
    ],
  },

  // ─── [1] 표현 확장 (꾸미기) ────────────────
  {
    id: 'sticker',
    icon: '',
    numbering: '표현 확장',
    quote: '',
    title: '꾸미기가 자유로울수록 더 많이 쓴다. \n그래서 제약을 없앴다.',
    keywords: ['자유로운 배치', '확장형 패널', '가변 영역 인터랙션'],
    asIsImages: [
      {
        src: '/images/smols/mockups/sticker-as-is-1.png',
        imageWidth: 300,
        imageHeight: 600,
      },
      {
        src: '/images/smols/mockups/sticker-as-is-2.png',
        imageWidth: 300,
        imageHeight: 600,
      },
    ],
    toBeImages: [
      {
        src: '/images/smols/mockups/sticker-to-be-1.png',
        imageWidth: 300,
        imageHeight: 600,
      },
      {
        src: '/images/smols/mockups/sticker-to-be-2.png',
        imageWidth: 300,
        imageHeight: 600,
      },
    ],
    asIsPoints: [
      { highlight: '제한된 편집 영역, ', text: '스티커가 특정 구간만 이동' },
      { text: '좌우 스크롤에만 의존한 아이템 탐색' },
      { text: '확장성 없는 고정형 카테고리 구조' },
    ],
    toBePoints: [
      { highlight: '자유로운 배치, ', text: '전체 영역에서 스티커 이동' },
      { highlight: '확장형 패널, ', text: '상하 스크롤로 아이템 한눈에' },
      { highlight: '가변 영역 인터랙션, ', text: '추가 기능에도 대응' },
    ],
  },

  // ─── [2] 피드 탐색 ─────────────────────────
  {
    id: 'feed',
    icon: '',
    numbering: '피드 탐색',
    quote: '빠른 기록 진입, 다양한 피드 탐색을 원한다.',
    title: '묻혀 있던 기록 버튼을 \n가장 잘 보이는 곳으로',
    keywords: [
      '상단 기록하기 배너 (Writer 진입)',
      'Viewing Mode 추가',
      '댓글 작성 UX 개선',
    ],
    asIsImages: [
      {
        src: '/images/smols/mockups/feed-as-is-1.png',
        imageWidth: 300,
        imageHeight: 600,
      },
      {
        src: '/images/smols/mockups/feed-as-is-2.png',
        imageWidth: 300,
        imageHeight: 600,
      },
    ],
    toBeImages: [
      {
        src: '/images/smols/mockups/feed-to-be-1.png',
        imageWidth: 300,
        imageHeight: 600,
      },
      {
        src: '/images/smols/mockups/feed-to-be-2.png',
        imageWidth: 300,
        imageHeight: 600,
      },
    ],
    asIsPoints: [
      { highlight: '이미지 중심, ', text: '정보 탐색 제한' },
      { highlight: '기록·탐색 목적,  ', text: '혼재' },
      { text: '좋아요·댓글·공유 동일 레벨. 소통 진입 불편' },
    ],
    toBePoints: [
      { highlight: '상단 기록하기 배너, ', text: 'Writer·Viewer 진입 분리' },
      {
        highlight: 'Viewing Mode 추가, ',
        text: '적은 스크롤로 더 많은 피드',
      },
      { highlight: '댓글 UX 개선, ', text: '바로 소통 가능' },
    ],
  },
]

// ─── Transformation (AS-IS / TO-BE 텍스트) ───────────────────
// UxPrinciples와 동일 순서: [0] 기록 → [1] 꾸미기 → [2] 피드
export const curiTransformations: Transformation[] = [
  // ─── [0] 기록 진입 ─────────────────────────
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

  // ─── [1] 표현 확장 (꾸미기) ────────────────
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

  // ─── [2] 피드 탐색 ─────────────────────────
  {
    center: '피드 탐색 구조',
    before: {
      label: 'AS-IS',
      title: '이미지 중심 탐색 구조',
      description:
        '이미지가 화면 대부분을 차지해\n정보 탐색에 제한이 있었고,\n기록과 탐색의 목적이 혼재되어\n사용자 진입 의도가 불분명했습니다.',
    },
    after: {
      label: 'TO-BE',
      title: '목적 분리형 탐색 구조',
      description:
        '상단 기록하기 배너로 Writer·Viewer 진입을 분리하고\nViewing Mode를 추가해 적은 스크롤로\n다양한 피드를 탐색할 수 있도록 개선했습니다.\n\n댓글 UX도 전면 배치해 바로 소통할 수 있습니다.',
    },
    insights: { text: '탐색 · 소통\n효율화' },
  },
]

// ─── Problem Metrics Stats ───────────────────────────────────
export const curiProblemStats = [
  { value: '4단계', label: '평균 체류 시간' },
  { value: '60%', label: '1주 이탈율' },
  { value: '15%', label: '기록 전환율' },
]
