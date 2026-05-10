import type { UxStrategy, UxPrincipleType } from '../../types/curi'

// ─── 인사이트 요약 ───────────────────────────────────────────
export const curiInsightSummary: { description: string } = {
  description:
    '기록 기능이 아니라,\n기록을 지속하게 만드는 경험이 필요했습니다.',
}

// ─── UX 전략 3단계 (개선방향) ────────────────────────────────
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

// ─── UX Principles ───────────────────────────────────────────
// 순서:
//   [0] 질문 진입         — AS-IS / TO-BE 비교
//   [1] UI · 01 (RELEASED) — 가이드 & Motion UI
//   [2] UI · 02 (RELEASED) — 재미 요소 & 반복 사용
export const curiUxPrinciples: UxPrincipleType[] = [
  // ─── [0] 질문 진입 ───────────────────────────────
  {
    id: 'feed',
    icon: '👀',
    numbering: '질문 진입',
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
        text: '진입 → 터치 → 촬영 → 크롭 4단계 실행 후 질문 가능',
      },
      {
        text: 'AI 답변 유도를 위한 문제검색이 우선순위에 배치',
      },
      {
        text: '다른 검색 방식으로 전환하는 경로가 불편',
      },
    ],
    toBePoints: [
      {
        highlight: '진입 → 촬영 2단계로 압축, 바로 질문 가능',
        text: '',
      },
      {
        highlight: '튜터에게 빠르게 닿는 1:1 질문을 디폴트로 배치',
        text: '',
      },
      {
        highlight: '문제·교재·텍스트 검색은 Swipe로 편리하게 전환',
        text: '',
      },
    ],
  },

  // ─── [1] UI · 01 (RELEASED) ──────────────────────
  {
    id: 'guide-motion',
    icon: '📱',
    numbering: 'UI · 01',
    title: '일관된 디자인 가이드와 Motion UI로\n다음 행동을 자연스럽게 유도',
    keywords: ['캐릭터·말풍선 가이드', '버튼 상태 일관성', '시선 유도'],
    toBeImages: [
      {
        src: '/images/curi/mockups/released-tutorial.png',
        imageWidth: 280,
        imageHeight: 580,
      },
      {
        src: '/images/curi/mockups/released-rating.png',
        imageWidth: 280,
        imageHeight: 580,
      },
    ],
    toBePoints: [
      {
        highlight:
          '캐릭터·말풍선·시선으로 다음 액션을 가리키고, 버튼 상태(active / inactive / selected)를 일관된 룰로 정리',
        text: '',
      },
    ],
    asIsImages: [],
    asIsPoints: [],
  },

  // ─── [2] UI · 02 (RELEASED) ──────────────────────
  {
    id: 'fun-loop',
    icon: '🎁',
    numbering: 'UI · 02',
    title: '정보 전달에 재미 요소를 더해\n반복 사용 동기 강화',
    keywords: ['출석 게이미피케이션', '보상 시스템', '위트있는 카피'],
    toBeImages: [
      {
        src: '/images/curi/mockups/released-attendance.png',
        imageWidth: 280,
        imageHeight: 580,
      },
      {
        src: '/images/curi/mockups/released-curiplus.png',
        imageWidth: 280,
        imageHeight: 580,
      },
    ],
    toBePoints: [
      {
        highlight:
          '게이미피케이션 출석/보상 시스템으로 매일 다시 열고 싶은 동기 부여',
        text: '',
      },
      {
        highlight: '위트있는 카피·이모지·캐릭터로 정보 전달에 재미 요소 추가',
        text: '',
      },
    ],
    asIsImages: [],
    asIsPoints: [],
  },
]
