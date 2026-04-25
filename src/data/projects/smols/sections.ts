import type { SectionData } from '../../types/smols'

export const smolsSections: Record<string, SectionData> = {
  problemMetrics: {
    type: 'metrics',
    badge: '문제 정의',
    title: '사용자는 기록하러 왔지만, \n기록하지 못하고 떠났다',
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

  // 문제 정의 타이틀
  feedbackAnalysis: {
    type: 'research',
    badge: '리서치',
    title: '숫자로 확인한 진짜 사용 목적',
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
    title: '사용자가 거쳐가는 \n두 가지 길을 다시 설계하다',
    align: 'left',
  },

  // 개선 과정
  solution: {
    type: 'solution',
    badge: '개선 과정',
    title: '기록 진입과 기록 과정,\n두 퍼널을 바꾸다',
    description: '',
    align: 'center',
  },

  resultSection: {
    type: 'result',
    badge: '회고',
    title: '구조를 바꾸자 사람이 \n기록하기 시작했다',
    description:
      '기록을 시작할 수 없는 구조가 문제였다. 기능이 아니라 흐름이었다. \n941건 리뷰로 행동 패턴을 정의하고 마찰을 제거했다. 진입 구조를 바꾸자 전환율이 올랐고, 꾸미기 자유도를 높이자 재방문이 따라왔다.',
    align: 'center',
  },

  retrospectiveSection: {
    type: 'retrospective',
    badge: 'SMOLS',
    title: '진입 구조를 바꾸자, \n기록이 2배 늘었다.',
    description: '작은 흐름 하나가 지표를 움직인다는 걸 배웠다.',
    align: 'left',
  },
}
