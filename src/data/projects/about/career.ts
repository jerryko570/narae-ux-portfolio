import type {
  EducationItem,
  CareerTimelineEntry,
} from '@/data/types/home/career.types'

// ─── 경력 타임라인 ─────────────────────────────────────────────
export const aboutCareer = {
  title: '경력 타임라인',
  description:
    '다양한 도메인에서 UX를 설계하며 구조와 흐름 중심으로 확장해왔습니다.',

  // ─── 학력 ───────────────────────────────────────────────────
  education: [
    { year: '2006', title: '세화 여자고등학교 (서울)' },
    { year: '2012', title: '계원예술대학교 멀티미디어디자인과 졸업' },
  ] satisfies EducationItem[],

  // ─── 경력 ───────────────────────────────────────────────────
  experience: [
    // ─── Era 1: 2012-2015 디자이너로서의 출발 ─────────────────
    {
      kind: 'era',
      period: '2012-2015',
      label: '디자이너로서의 출발',
      theme: 'outlineDark',
      gap: 'sm',
    },
    {
      kind: 'item',
      year: '2012-2013',
      company: '오리진나인',
      description: '그래픽·캐릭터·웹 구축을 폭넓게 경험한 시기',
    },
    {
      kind: 'item',
      year: '2013',
      company: '프리랜서',
      description: '스타트업 로고와 브랜딩 프로젝트 수행',
    },
    {
      kind: 'item',
      year: '2014',
      company: '페타비전',
      description: ' 글로벌 iOS 앱 3종 디자인 (Gridplay·Vinema·Hardcover)',
      link: {
        label: 'App Store에서 보기',
        url: 'https://apps.apple.com/us/developer/peta-vision/id401432180',
      },
    },
    {
      kind: 'item',
      year: '2015',
      company: '요쿠스',
      description: '오디션 영상 플랫폼의 앱·웹 UX 설계',
    },

    // ─── Era 2: 2016-2024 UX · 프로덕트 확장 ──────────────────
    {
      kind: 'era',
      period: '2016-2024',
      label: 'UX · 프로덕트 확장',
      theme: 'outlineDark',
      gap: 'md',
    },
    {
      kind: 'item',
      year: '2016-2019',
      company: '엠터치',
      description: '리테일·BI·POS 중심의 복잡한 업무 도구 UX 재정립',
    },
    {
      kind: 'item',
      year: '2019',
      company: '페이지크루',
      description: 'QR 기반 서비스의 사용자 흐름, 경험 전반을 최적화',
    },
    {
      kind: 'item',
      year: '2020-2022',
      company: '플랫비',
      description: 'CURI UX 개편과 스카이탭 신규 출시',
    },
    {
      kind: 'item',
      year: '2022-2024',
      company: '진저나인',
      description: '스몰스 UI·UX 개편과 브랜드 톤 가이드 구축',
    },

    // ─── Era 3: 2025- 구현까지 연결하는 디자이너 ──────────────
    {
      kind: 'era',
      period: '2025-',
      label: '구현까지 연결하는 디자이너',
      theme: 'blue',
      gap: 'lg',
    },
    {
      kind: 'item',
      year: '2025-2026',
      company: '코드잇 프론트엔드 부트캠프 수료',
      description: 'UI 컴포넌트 개발·배포·API 연동',
    },
  ] satisfies CareerTimelineEntry[],

  closing:
    '디자인하고, 만들고, 증명합니다.\n코드·데이터·AI로 설계의 폭을 넓혀갑니다.',
}

// ─── 기술 스택 ─────────────────────────────────────────────────
export const techStack = {
  title: '기술 스택',
  description:
    'UI 구조 이해를 기반으로 설계와 구현을 연결하는 기술을 사용합니다.',
  categories: [
    {
      title: 'Design',
      description: '서비스 UX 설계 및 인터랙션 설계 경험',
      items: [
        { label: 'figma', theme: 'outlineDark' },
        { label: 'photoshop', theme: 'outlineDark' },
        { label: 'illustrator', theme: 'outlineDark' },
        { label: 'principle', theme: 'outlineDark' },
      ],
    },
    {
      title: 'Frontend',
      description: 'UI 구조 이해 기반의 컴포넌트 및 API, 배포 구현 경험',
      items: [
        { label: 'react', theme: 'outlineDark' },
        { label: 'next.js', theme: 'outlineDark' },
        { label: 'tailwind', theme: 'outlineDark' },
      ],
    },
    {
      title: 'Workflow',
      description: 'Git 기반 협업 및 핸드오프, 컴포넌트 관리 경험',
      items: [
        { label: 'github', theme: 'outlineDark' },
        { label: 'storybook', theme: 'outlineDark' },
      ],
    },
  ] as const,
}
