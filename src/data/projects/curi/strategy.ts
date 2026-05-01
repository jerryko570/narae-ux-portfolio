import type { UxStrategy, UxPrincipleType } from '../../types/curi'

// ─── 인사이트 요약 ───────────────────────────────────────────
export const curiInsightSummary: { description: string } = {
  description:
    '기록 기능이 아니라,\n기록을 지속하게 만드는 경험이 필요했습니다.',
}

// ─── 전략 카드 (기존 경험 / 개선된 경험) ─────────────────────

// ─── UX 전략 3단계 (개선방향)───────────────────────────────────────────
export const curiUxStrategy: UxStrategy = {
  items: [
    {
      numbering: '질문 진입',
      title: '바로 촬영, 바로 질문',
      description:
        '4단계 흐름을 2단계로 압축. 진입하면 즉시 촬영 화면으로, 1:1 질문을 디폴트로 배치.',
    },
    {
      numbering: '다른 검색 경로',
      title: '필요할 때 옆에 있는 대안',
      description:
        '문제·교재·텍스트 검색을 Swipe로 전환. 주 흐름을 방해하지 않으면서 접근 가능.',
    },
    {
      numbering: 'UI·경험',
      title: '친근하게, 자연스럽게',
      description:
        '캐릭터와 Motion UI로 정보 전달에 재미 요소 추가. 딱딱한 교육 서비스를 친근한 경험으로.',
    },
  ],
}

// ─── UX Principles — AS-IS / TO-BE 비교 데이터 ───────────────
// 순서: [0] 기록 진입 → [1] 기록 작성 → [2] 꾸미기
export const curiUxPrinciples: UxPrincipleType[] = [
  // ─── [0] 기록 진입 ─────────────────────────
  {
    id: 'feed',
    icon: '👀',
    numbering: '질문 진입',
    quote: '',
    title: '4단계를 2단계로, 질문까지의 마찰을 없애다',
    keywords: [
      '상단 기록하기 배너 (Writer 진입)',
      'Viewing Mode 추가',
      '댓글 작성 UX 개선',
    ],
    asIsImages: [
      {
        src: '/images/curi/mockups/feed-as-is-1.png',
        imageWidth: 300,
        imageHeight: 600,
      },
      {
        src: '/images/curi/mockups/feed-as-is-2.png',
        imageWidth: 300,
        imageHeight: 600,
      },
    ],
    toBeImages: [
      {
        src: '/images/curi/mockups/feed-to-be-1.png',
        imageWidth: 300,
        imageHeight: 600,
      },
    ],
    asIsPoints: [
      {
        highlight: '',
        text: '진입 → 터치 → 촬영 → 크롭 4단계 실행 후 질문 가능',
      },
      { highlight: '', text: 'AI 답변 유도를 위한 문제검색이 우선순위에 배치' },
      { highlight: '', text: '다른 검색 방식으로 전환하는 경로가 불편' },
    ],
    toBePoints: [
      {
        highlight: '진입 → 촬영 2단계로 압축, ',
        text: '바로 질문 가능',
      },
      {
        highlight: '튜터에게 빠르게 닿는 1:1 질문을 디폴트로 배치',
        text: '',
      },
      { highlight: '문제·교재·텍스트 검색은 Swipe로 편리하게 전환', text: '' },
    ],
  },

  // ─── [1] 기록 작성 ─────────────────────────
  {
    id: 'solution',
    icon: '✏️',
    numbering: 'UI · 경험',
    quote: '',
    title: '정보는 더 쉽게, 경험은 더 친근하게',
    keywords: ['키패드 즉시 노출', '불필요 옵션 제거', '작성 우선순위 가이드'],
    asIsImages: [
      {
        src: '/images/curi/mockups/solution-as-is-1.png',
        imageWidth: 300,
        imageHeight: 600,
      },
      {
        src: '/images/curi/mockups/solution-as-is-2.png',
        imageWidth: 300,
        imageHeight: 600,
      },
    ],
    toBeImages: [
      {
        src: '/images/curi/mockups/solution-to-be-1.png',
        imageWidth: 300,
        imageHeight: 600,
      },
      {
        src: '/images/curi/mockups/solution-to-be-2.png',
        imageWidth: 300,
        imageHeight: 600,
      },
    ],
    asIsPoints: [
      {
        highlight: '',
        text: '화면 전환·피드백 없이 정적인 UI, 다음 행동 유도 부족',
      },
      { highlight: '', text: '정보 전달 중심의 딱딱한 인터페이스' },
      { highlight: '', text: '교육 서비스 특성상 사용자와의 거리감이 존재' },
    ],
    toBePoints: [
      {
        highlight:
          '일관된 디자인 가이드와 Motion UI로 다음 행동을 자연스럽게 유도 ',
        text: '',
      },
      {
        highlight: '친화적 캐릭터(오리 캐릭터)로 서비스와 사용자의 거리를 좁힘',
        text: '',
      },
      {
        highlight: '정보 전달에 재미 요소를 더해 반복 사용 동기 강화',
        text: '',
      },
    ],
  },
]
