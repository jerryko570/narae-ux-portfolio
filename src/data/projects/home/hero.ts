import type { HomeHeroData } from '@/data/types/home/hero.types'
export const HomeHeros: HomeHeroData = {
  title: '문제를 정의하고 \n구현까지 연결하는 \n디자이너',
  cards: [
    {
      title: '스몰스',
      description:
        '사용자 리뷰 941건을 분석해 \n기록 전환율을 15% → 32%로\n 끌어올린 UX 개편',
      button: { label: '어떻게 해결했는지 보기', href: '/smols' },
      theme: 'orange',
    },
    {
      title: '큐리',
      description:
        '질문까지의 단계를 \n4단계 → 2단계로 압축 \n 튜터 도달 흐름 50% 단축',
      button: { label: '어떻게 개선했는지 보기', href: '/curi' },
      theme: 'pink',
    },
    {
      title: '나래봇',
      description:
        'Claude API + Next.js로 \n직접 빌드한 채용 담당자를 위한 \n질문하면 답하는 포트폴리오',
      button: { label: '직접 대화해보기', href: '/curi' },
      theme: 'dark',
    },
    {
      title: '저는요!',
      description:
        '14년의 디자인 + 1년의 코드 \n문제를 정의하고 \n구현까지 연결합니다',
      button: { label: '저 더 알아보기', href: '/about' },
      theme: 'sky',
    },
  ],
}
