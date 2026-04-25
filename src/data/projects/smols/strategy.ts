import type {
  StrategyItem,
  UxStrategy,
  Transformation,
  UxPrincipleType,
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

// ─── UX 전략 3단계 (개선방향)───────────────────────────────────────────
export const smolsUxStrategy: UxStrategy = {
  items: [
    {
      numbering: '기록 진입',
      title: '피드에서 기록으로, 바로',
      description:
        '구경하던 사용자도 쉽게 기록할 수 있도록, 진입 경로를 둘로 나눴습니다.',
    },
    {
      numbering: '기록 과정',
      title: '빠르게, 군더더기 없이',
      description: '입력은 빠르게, 꾸미기는 자유롭게, 완성까지 끊김 없이.',
    },
  ],
}

// ─── UX Principles — AS-IS / TO-BE 비교 데이터 ───────────────
// 순서: [0] 기록 → [1] 꾸미기 → [2] 피드
export const smolsUxPrinciples: UxPrincipleType[] = [
  // ─── [0] 피드 탐색 ─────────────────────────
  {
    id: 'feed',
    numbering: '기록 진입',
    quote: '빠른 기록 진입, 다양한 피드 탐색을 원한다.',
    title: '보는 사람과 기록하는 사람, \n진입을 분리하다',
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
  // ─── [1] 기록 진입 ─────────────────────────
  {
    id: 'solution',
    numbering: '기록 과정',
    quote: '',
    title: '쓰고, 꾸미고, 완성하는 \n흐름을 다시 설계하다',
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
      { highlight: '필수값·옵션 혼재, ', text: '입력 순서 불분명' },
      { highlight: '', text: '꾸미기가 텍스트 입력보다 앞에 노출' },
      { highlight: '', text: '우선순위를 사용자가 직접 판단해야 함' },
    ],
    toBePoints: [
      { highlight: '키패드 즉시 노출,   ', text: '제목부터 입력 시작' },
      { highlight: '사진·꾸미기만 남기고, ', text: '불필요 옵션 제거' },
      { highlight: '기록 흐름 명확, ', text: '이탈 없이 완성' },
    ],
  },

  // ─── [3] 표현 확장 (꾸미기) ────────────────
  {
    id: 'sticker',
    numbering: '',
    quote: '',
    title: '',
    keywords: [
      '바텀시트 핸들로 영역 가변',
      '카테고리 이동 UX 개선',
      '상하 스크롤 아이템 탐색',
    ],
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
      { highlight: '카테고리·메뉴, ', text: ' 선택 흐름 끊김' },
      {
        highlight: '고정 메뉴 영역, ',
        text: '아이템 탐색 제한',
      },
      { highlight: '좌우 스크롤, ', text: '확장성 부족' },
    ],
    toBePoints: [
      {
        highlight: '카테고리·아이템, ',
        text: '선택 흐름 연결',
      },
      { highlight: '바텀시트 핸들, ', text: '영역 크기 자유 조절' },
      { highlight: '상하 스크롤, ', text: '로 아이템 탐색 확장' },
    ],
  },
]

// ─── Transformation (AS-IS / TO-BE 텍스트) ───────────────────
// UxPrinciples와 동일 순서: [0] 기록 → [1] 꾸미기 → [2] 피드
export const smolsTransformations: Transformation[] = [
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
export const smolsProblemStats = [
  { value: '45초', label: '평균 체류 시간' },
  { value: '60%', label: '1주 이탈율' },
  { value: '15%', label: '기록 전환율' },
]
