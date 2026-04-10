import type { HomeHeroData } from '@/data/types/home/hero.types'
export const HomeHeros: HomeHeroData = {
  title: '{문제를 정의하고 \n구현까지 연결하는 \n디자이너}',
  cards: [
    {
      title: '스몰스',
      description: '반려동물 기록 앱 \n리뷰 900건 분석과\n 전환율 15%에서 32%',
      button: { label: '어떻게 해결했는지 보기', href: '/smols' },
      theme: 'orange',
    },
    {
      title: '큐리',
      description: '학생 참여형 교육 서비스 \n이탈 원인 분석과 참여율 개선',
      button: { label: '어떻게 개선했는지 보기', href: '/curi' },
      theme: 'pink',
    },
    {
      title: '나래봇',
      description: '채용 담당자를 위한 \n질문하면 답하는 포트폴리오',
      button: { label: '직접 대화해보기', href: '/curi' },
      theme: 'dark',
    },
    {
      title: '저는요!',
      description: '문제를 정의하고, \n끝까지 해결합니다.',
      button: { label: '저 더 알아보기', href: '/naraebot' },
      theme: 'sky',
    },
  ],
}
