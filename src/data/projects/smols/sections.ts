import type { SectionData } from '../../types/smols'

export const smolsSections: Record<string, SectionData> = {
  problemMetrics: {
    type: 'metrics',
    badge: 'BEHAVIOR INSIGHT',
    title: '탐색에서 멈춘 \n사용자 경험',
    align: 'center',
    metrics: {
      description: '941건 서포터즈 데이터에서 발견한 패턴',
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
    badge: 'CORE STRATEGY',
    title: '기록이 중심이 되는 구조로',
    align: 'left',
  },

  solution: {
    type: 'solution',
    badge: 'UX PRINCIPLES',
    title: '설계가 경험을 바꾼다',
    description: '',
    align: 'center',
  },

  resultSection: {
    type: 'result',
    badge: 'RESULT',
    title: 'UX 개선 기대 결과',
    description: '',
    align: 'center',
  },

  retrospectiveSection: {
    type: 'retrospective',
    badge: 'SMOLS',
    title: 'UX는 기능이 아니라, \n사용자 행동 흐름이다',
    description: '데이터 기반으로 행동을 설계할 때 비로소 전환이 만들어진다.',
    align: 'left',
  },
}
