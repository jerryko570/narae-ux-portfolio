import type { HeroData, SectionData, AppReviewData } from './types'

export const smolsHeros: HeroData[] = [
  {
    id: 1,
    badge: 'GOAL',
    badgeText: '기록 참여를 유도하는 경험 설계',
    title: '정보 탐색에서 \n 기록 경험으로의 전환',
    description:
      '3,000명 이상의 사용자 데이터를 기반으로 \n 기록 참여 경험을 재설계했습니다.',
    image: '/images/smols-hero-mockup.png',
    meta: [
      { label: 'ROLE', values: ['UX Research', 'UI Design'] },
      { label: 'DURATION', values: ['2023.03~', '2024.01'] },
      { label: 'TOOLS', values: ['Figma', 'FigJam'] },
      { label: 'TEAM', values: ['1 Designer'] },
    ],
  },
]

export const smolsSections: Record<string, SectionData> = {
  overview: {
    type: 'background',
    badge: 'BACKGROUND',
    title: '정보 탐색 중심 \n 스몰스',
    description:
      '스몰스는 정보 탐색 중심으로 MVP를 출시했으며 \n 기록 기능도 존재했지만, 사용자 참여로 이어지지 않았습니다.',
    align: 'center',
  },

  problemEvidence: {
    type: 'keyMetric',
    badge: 'KEY METRICS',
    title: '데이터로 확인된 문제',
    align: 'center',
    stat: {
      description: '사용자는 탐색에 머물고, 기록으로 전환되지 않았습니다.',
      items: [
        {
          value: '45초',
          label: '정보 탐색시간',
          insight: '탐색 → 기록 전환 실패',
        },
        { value: '60%', label: '1주 이탈률', goal: '목표 30% ↓' },
        { value: '15%', label: '기록 전환율', goal: '목표 50% ↑' },
      ],
    },
  },

  userResearch: {
    type: 'insight',
    badge: 'INSIGHT',
    title: '정보보다 \n 기록과 소통 경험',
    description:
      '사용자는 정보 탐색보다\n반려동물을 기록하고 교감하는 경험을 더 원했습니다.\n\n하지만 기록, 댓글, 좋아요가 동일한 UI 레벨에 배치되어\n사용자가 무엇을 해야 할지 알 수 없었습니다.\n\n결국 사용자는 탐색에만 머물렀고,\n기록과 참여로 이어지지 않았습니다.',
    align: 'left',
    titleSize: 'h1',
    researchResult: {
      who: {
        title: '조사 대상 (Who)',
        data: '322명',
        subtitle: '서비스 참여 경험 \n 기반 사용자',
        description: '',
        subdescription: '',
      },
      what: {
        title: '핵심 발견 (What)',
        data: '55%',
        subtitle: '정보 탐색보다 \n 기록 · 꾸미기 중심',
        description: '',
        subdescription: '',
      },
      donutChart: {
        image: '/images/smols-donut-chart.png',
        title: '사용 패턴 (Result)',
        description: '',
      },
      highlight: '기록·꾸미기 사용 54.8%',
    },
  },

  appReviewAnalysis: {
    type: 'background',
    badge: 'APP REVIEW ANALYSIS',
    title: '기록은 가능했지만,\n신뢰할 수 없었습니다.',
    align: 'left',
    description: '',
  },
}

export const smolsAppReview: AppReviewData = {
  left: {
    icon: '',
    title: '앱 리뷰 분석',
    count: '(2,688건 리뷰 데이터 기반)',
    description:
      '사용자 리서치와 2,688건의 리뷰 분석 결과,\n문제는 기능이 아닌 기록 경험에서 발생하고 있었습니다.\n특히 기록 안정성과 사용성 영역에서\n사용자의 신뢰를 저해하는 핵심 문제가 확인되었습니다.',
    link: { label: '리뷰 데이터 샘플 보기', url: '/reviews' },
  },
  right: {
    title: 'UX Pain Points',
    unit: '단위: %',
    items: [
      { label: '기록 안정성 (저장 · 수정 시 데이터 유실)', value: 35.3 },
      { label: '편집 사용성', value: 19.8 },
      { label: '피드백 부족 (에러 · 상태 안내)', value: 15.8 },
      { label: '업로드 불안정 (지연 · 실패)', value: 14.5 },
    ],
  },
}
