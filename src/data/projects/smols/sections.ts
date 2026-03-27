import type { SectionData } from '../../types'

export const smolsSections: Record<string, SectionData> = {
  overview: {
    type: 'background',
    badge: 'BACKGROUND',
    title: '정보 탐색에 머문 \n 스몰스',
    description:
      '정보 탐색 중심으로 설계되었지만,\n기록은 행동으로 이어지지 않았습니다.',
    align: 'center',
  },
  problemMetrics: {
    type: 'metrics',
    badge: 'KEY METRICS',
    title: '데이터로 확인된 문제',
    align: 'center',
    metrics: {
      description: '사용자는 정보를 탐색했지만, 기록으로 이어지지 않았습니다.',
      items: [
        { value: '45초', label: '정보 탐색시간', insight: '탐색에 머무름' },
        { value: '60%', label: '1주 이탈률', insight: '초기 사용 이후 이탈' },
        { value: '15%', label: '기록 전환율', insight: '핵심 기능 사용 낮음' },
      ],
    },
  },
  userInsight: {
    type: 'insight',
    badge: 'INSIGHT',
    title: '정보보다 \n 기록과 꾸미기',
    description:
      '사용자는 정보를 소비하기보다\n반려동물을 기록하고 꾸미는 경험을 기대했습니다.\n\n그러나 기록 과정은 번거롭고,\n꾸미기 기능은 충분히 제공되지 않았습니다.\n\n이로 인해 기록은 반복되지 않았고,\n서비스는 탐색 중심으로 머물렀습니다.',
    align: 'left',
    titleSize: 'h1',
    image: '/images/smols/research/user-research-chat.png',
    researchSummary: {
      who: {
        title: '조사 대상 (Who)',
        data: '118명',
        subtitle: '서비스 서포터즈 참여자 (4~6기 기준)',
        description: '',
        subdescription: '',
      },
      what: {
        title: '핵심 발견 (What)',
        data: '80%',
        subtitle: '기록 목적 사용',
        description: '',
        subdescription: '',
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
    title: '기록 중심 구조로\n 경험을 전환',
    align: 'left',
  },
  uxStrategy: {
    type: 'research',
    badge: 'UX STRATEGY',
    title: '기록 경험 중심 UX 설계',
    description:
      '기록은 입력이 아니라 경험입니다. \n 경험이 반복되도록 흐름을 설계했습니다. ',
    align: 'left',
  },
}
