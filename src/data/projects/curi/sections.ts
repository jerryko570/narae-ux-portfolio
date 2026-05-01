import type { SectionData } from '../../types/curi'

export const curiSections: Record<string, SectionData> = {
  problemMetrics: {
    type: 'metrics',
    badge: '문제 정의',
    title: '학생은 답을 찾으러 왔지만, \n찾기도 전에 포기했다',
    align: 'center',
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

  // 문제 정의 타이틀
  feedbackAnalysis: {
    type: 'research',
    badge: '리서치',
    title: '학생 절반 이상이 \n튜터를 가장 먼저 찾는다',
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
    badge: '개선 방향',
    title: '튜터에게 가장 빠르게\n닿을 수 있는 구조로',
    align: 'left',
  },

  // 개선 과정
  solution: {
    type: 'solution',
    badge: '개선 과정',
    title: '두 단계로 바꾼\n사용자 경험',
    description: '',
    align: 'center',
  },

  resultSection: {
    type: 'result',
    badge: '회고',
    title: '흐름을 줄이자 \n학생이 질문하기 시작했다',
    description:
      '학생이 질문을 안 한 게 아니라, 질문하기까지 너무 많은 단계를 거쳐야 했다. \n문제는 기능이 아니라 진입 흐름이었다. 설문을 통해 튜터 직접 질문 니즈(50.1%)를 확인하고, 4단계 진입 흐름을 2단계로 압축했다. \n학생이 모르는 순간, 가장 빠르게 튜터에게 닿을 수 있는 구조를 만드는 것이 핵심이었다.',
    align: 'center',
  },
}
