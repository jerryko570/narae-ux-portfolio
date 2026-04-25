import type {
  StrategyItem,
  UxStrategy,
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
    title: '기존 ㄹㄹㄹ경험',
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
      title: '기록 버튼을 가장 가까운 곳으로',
      description:
        '탭 구조 안에 숨겨진 기록 버튼을 메인 상단과 하단 탭 중앙으로 꺼냈습니다. \n기록하고 싶은 순간, 어느 화면에서든 바로 진입.',
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
    quote: '',
    title: '묻혀 있던 기록 버튼을 가장 잘 보이는 곳으로',
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
      {
        highlight: '기록하려면 하단 탭 → 스토리 → 기록 순으로 진입, ',
        text: '',
      },
      { highlight: '기록 버튼이 탭 구조 안에 숨겨진 상태,  ', text: '' },
      { text: '기록 의지가 있어도 진입 전에 이탈 발생' },
    ],
    toBePoints: [
      {
        highlight: '메인 상단 배너, ',
        text: '기록 의지가 있어도 진입 전에 이탈 발생',
      },
      {
        highlight: '하단 탭 중앙, ',
        text: '에 기록하기 버튼 고정 — 어느 화면에서든 접근 가능',
      },
      { highlight: '기록 진입 경로 단축 ', text: '이탈 지점 제거' },
    ],
  },
  // ─── [1] 기록 과정 ─────────────────────────
  {
    id: 'solution',
    numbering: '기록 과정 - 기록 작성',
    quote: '',
    title: '쓰고, 꾸미고, 완성하는 흐름을 다시 설계하다',
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
    numbering: '기록 과정 - 꾸미기',
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

// ─── Problem Metrics Stats ───────────────────────────────────
export const smolsProblemStats = [
  { value: '45초', label: '평균 체류 시간' },
  { value: '60%', label: '1주 이탈율' },
  { value: '15%', label: '기록 전환율' },
]
