import type { HomeHeroData } from '@/data/types/home/hero.types'
export const HomeHeros: HomeHeroData = {
  title: '{문제를 정의하고 \n구현까지 연결하는 \n디자이너}',
  cards: [
    {
      title: '스몰스',
      description: '반려동물 기록 앱 \n리뷰 900건 기반 UX 개선',
      button: { label: '개선 과정 보기', href: '/smols' },
      theme: 'orange',
    },
    {
      title: '큐리',
      description: '학생 참여형 교육 서비스 \n이탈 감소를 위한 UX 재설계',
      button: { label: 'UX 개선 보기', href: '/curi' },
      theme: 'pink',
    },
    {
      title: '나래봇',
      description: 'AI 포트폴리오 챗봇 \n질문 기반 탐색 경험 설계',
      button: { label: '직접 대화해보기', href: '/curi' },
      theme: 'dark',
    },
  ],
}
