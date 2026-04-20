'use client'

import dynamic from 'next/dynamic'

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className='flex h-37.5 items-center justify-center text-gray-400'>
        잔디 불러오는 중...
      </div>
    ),
  }
)

const GITHUB_USERNAME = 'jerryko570'

export default function AboutGitHubSection() {
  return (
    <div className='mt-8'>
      <div className='rounded-2xl bg-white p-6'>
        <GitHubCalendar
          username={GITHUB_USERNAME}
          colorScheme='light'
          blockSize={10}
          blockMargin={3}
          fontSize={12}
          labels={{
            totalCount: '{{count}}번의 깃허브 커밋, 꾸준히 기록 중',
          }}
          theme={{
            light: ['#ebedf0', '#c6e6ff', '#7cc5ff', '#378add', '#185fa5'],
          }}
        />
      </div>
    </div>
  )
}
