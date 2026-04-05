import type { SectionData } from '../../types'

export const smolsSections: Record<string, SectionData> = {
  overview: {
    type: 'background',
    badge: 'BACKGROUND',
    title: '탐색에서 멈춘\n사용자 경험',
    description:
      '정보 탐색 중심으로 설계된 구조였습니다.\n사용자는 콘텐츠를 소비했지만,\n기록으로 이어지지 않았습니다.',
    align: 'center',
  },

  problemMetrics: {
    type: 'metrics',
    badge: 'BEHAVIOR INSIGHT',
    title: '데이터가 보여준 문제',
    align: 'center',
    metrics: {
      description: '탐색은 있었지만, 기록은 남지 않았습니다.',
      items: [
        { value: '45초', label: '평균 체류 시간', insight: '' },
        { value: '60%', label: '1주 내 이탈률', insight: '' },
        { value: '15%', label: '기록 전환율', insight: '' },
      ],
    },
  },

  userInsight: {
    type: 'insight',
    badge: 'INSIGHT',
    title: '정보보다 기록과 꾸미기',
    description: '',
    align: 'left',
    titleSize: 'h1',
    image: '/images/smols/research/user-research-chat.png',
    researchSummary: {
      who: {
        title: '서포터즈 참여자',
        data: '118명',
      },
      what: {
        title: '기록 목적 사용',
        data: '80%',
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
    title: '기록 중심 구조로\n경험 전환',
    align: 'left',
  },

  uxStrategy: {
    type: 'research',
    badge: 'UX STRATEGY',
    title: '기록 경험 중심\nUX 설계',
    description:
      '기록은 기능이 아니라 경험입니다.\n반복되는 기록 흐름을 만들었습니다.',
    align: 'left',
  },

  solution: {
    type: 'solution',
    badge: 'UX PRINCIPLES',
    title: '탐색 → 기록 전환 UX',
    description:
      '탐색 흐름 속에서 자연스럽게 기록으로 전환되도록 설계했습니다.',
    align: 'center',
  },

  sticker: {
    type: 'solution',
    title: '표현 자유도 확장 구조',
    description:
      '제한된 편집 구조를 개선해 자유로운 표현이 가능하도록 확장했습니다.',
    align: 'center',
  },

  resultSection: {
    type: 'result',
    badge: 'RESULT',
    title: 'UX 개선 결과 요약',
    description: '사용자 행동 변화를 통해 검증된 UX 개선 효과',
    align: 'center',
  },

  retrospectiveSection: {
    type: 'retrospective',
    badge: 'Insight',
    title: 'UX는 기능이 아니라, \n사용자 행동 흐름이다',
    description: '데이터 기반으로 행동을 설계할 때 비로소 전환이 만들어진다.',
    align: 'left',
  },
}
