'use client'

import { useStickyScroll } from '@/hooks/useStickyScroll'
import { smolsUxPrinciples } from '@/data/projects/smols'
import { smols } from '@/data/projects'
import Text from '../ui/Text/Text'
import SectionHeader from '../ui/SectionHeader/SectionHeader'
import Badge from '@/components/ui/Badge/Badge'

export default function StickyPhoneSection() {
  const { activeStep, containerRef } = useStickyScroll(smolsUxPrinciples.length)
  const currentVideo = smolsUxPrinciples[activeStep]

  return (
    <div className='bg-orange-500'>
      <div
        ref={containerRef}
        className='relative'
        style={{ height: `${smolsUxPrinciples.length * 100}vh` }}
      >
        <div className='sticky top-10 flex h-screen w-full flex-col items-center justify-center'>
          {/* 섹션 헤더 */}
          <div className='w-full max-w-7xl px-16 pb-16 text-center'>
            <SectionHeader
              badge={smols.sections.solution.badge}
              title={smols.sections.solution.title}
              className='text-white'
              badgeTheme='white'
              align='center'
            />
          </div>

          {/* 폰 + 텍스트 */}
          <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-16'>
            {/* 텍스트 — 왼쪽 */}
            <div className='w-100'>
              <Text as='h6' className='mb-2 font-extrabold text-orange-900'>
                0{activeStep + 1}
              </Text>
              <Text as='h2' className='mb-4 whitespace-pre-line text-white'>
                {currentVideo.title}
              </Text>
              <Text as='p' className='whitespace-pre-line text-white'>
                {currentVideo.desc}
              </Text>
            </div>

            {/* 폰 2개 — 오른쪽 */}
            <div className='flex items-center gap-[3vw]'>
              <PhoneFrame label='AS-IS' src={currentVideo.video.before.src} />
              <PhoneFrame
                label='TO-BE'
                src={currentVideo.video.after.src}
                highlight
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneFrame({
  label,
  src,
  highlight = false,
}: {
  label: string
  src: string
  highlight?: boolean
}) {
  return (
    <div className='flex flex-col items-center gap-6'>
      <Badge
        label={label}
        size='md'
        theme={highlight ? 'white' : 'darkOrange'}
      />
      <div
        className={`w-[18vw] max-w-52 overflow-hidden rounded-[2.5rem] border-4 bg-black ${
          highlight ? 'border-white' : 'border-black'
        }`}
      >
        <video key={src} autoPlay loop muted playsInline className='w-full'>
          <source src={src} type='video/mp4' />
        </video>
      </div>
    </div>
  )
}
