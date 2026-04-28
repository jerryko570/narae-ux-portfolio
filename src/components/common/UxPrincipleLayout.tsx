'use client'

import Image from 'next/image'
import Text from '../ui/Text/Text'
import SectionHeader from '../ui/SectionHeader/SectionHeader'
import Section from '../ui/Section'
import Badge from '../ui/Badge/Badge'
import FadeIn from '../ui/FadeIn'
import { smols } from '@/data/projects'
import type { UxPrincipleType, ImageConfig } from '@/data/types/smols'

type Props = {
  uxPrinciple: UxPrincipleType
  index?: number
  showSectionHeader?: boolean
}

type Point = {
  highlight?: string
  text: string
}

export default function UxPrincipleLayout({
  uxPrinciple,
  showSectionHeader = false,
}: Props) {
  return (
    <Section className='mx-auto w-full max-w-7xl' inner='0'>
      {/* 구역 1: 섹션 헤더 (옵션) */}
      {showSectionHeader && (
        <div className='pt-16'>
          <FadeIn>
            <SectionHeader
              badge={smols.sections.solution.badge}
              title={smols.sections.solution.title}
              align='center'
              titleSize='h4'
              badgeTheme='orange'
              className='text-gray-900'
            />
          </FadeIn>
        </div>
      )}

      {/* 구역 2: 원칙 헤더 — 이모지 박스 + 텍스트 */}
      <FadeIn>
        <div className='py-8'>
          <div className='flex items-center gap-5'>
            {uxPrinciple.icon && (
              <div
                role='img'
                aria-label='principle-icon'
                className='flex h-16 w-16 items-center justify-center rounded-3xl border border-gray-100 bg-white'
              >
                <Text as='h4'>{uxPrinciple.icon}</Text>
              </div>
            )}

            <div className='flex flex-col'>
              <Text as='p' className='font-bold tracking-wide text-orange-500'>
                {uxPrinciple.numbering}
              </Text>
              <Text
                as='h6'
                className='font-extralight whitespace-pre-line text-gray-900'
              >
                {uxPrinciple.title}
              </Text>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 구역 3: AS-IS / TO-BE 2패널 가로 비교 */}
      <div className='relative grid grid-cols-2 items-stretch gap-8'>
        {/* AS-IS — 먼저 등장 */}
        <FadeIn delay={0.1} duration={0.7}>
          <ComparisonPanel
            variant='before'
            images={uxPrinciple.asIsImages}
            points={uxPrinciple.asIsPoints}
          />
        </FadeIn>

        {/* TO-BE — 나중에 등장 */}
        <FadeIn delay={0.5} duration={0.7}>
          <ComparisonPanel
            variant='after'
            images={uxPrinciple.toBeImages}
            points={uxPrinciple.toBePoints}
          />
        </FadeIn>

        {/* 가운데 화살표 — TO-BE와 함께 등장 */}
        <FadeIn
          delay={0.5}
          duration={0.7}
          y={0}
          className='pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2'
        >
          <div className='flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-gray-100'>
            <svg
              width='30'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-orange-500'
            >
              <path d='M5 12h14' />
              <path d='m12 5 7 7-7 7' />
            </svg>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}

/* ─────────────────────────────────────────────
 * ComparisonPanel : AS-IS / TO-BE 한 패널
 * ─────────────────────────────────────────── */
function ComparisonPanel({
  variant,
  images,
  points,
}: {
  variant: 'before' | 'after'
  images: ImageConfig[]
  points: Point[]
}) {
  const isBefore = variant === 'before'

  return (
    <div
      className={`flex h-full flex-col rounded-3xl px-8 py-8 transition-all ${
        isBefore
          ? 'bg-white ring-1 ring-gray-100'
          : 'bg-orange-50 ring-1 ring-orange-100'
      }`}
    >
      {/* 패널 헤더 */}
      <div className='mb-6 flex items-center justify-between'>
        <Badge
          label={isBefore ? 'AS-IS' : 'TO-BE'}
          theme={isBefore ? 'outlineDark' : 'outlineOrange'}
          size='sm'
          className='w-fit'
        />
      </div>

      {/* 폰 이미지 그룹 */}
      <div className='flex h-96 items-center justify-center gap-5'>
        {images.map((image, i) => (
          <Image
            key={i}
            src={image.src}
            width={image.imageWidth}
            height={image.imageHeight}
            alt={`${isBefore ? 'AS-IS' : 'TO-BE'}-${i + 1}`}
            className='h-full w-auto object-contain'
          />
        ))}
      </div>

      {/* 하단 영역 */}
      <div className='pt-10'>
        {/* 포인트 리스트 — 각 항목 사이에 자동으로 가로선 */}
        <ul
          className={`divide-y ${
            isBefore ? 'divide-gray-200' : 'divide-orange-100'
          }`}
        >
          {points.map((point, i) => (
            <li key={i} className='flex items-start py-3 first:pt-0 last:pb-0'>
              <span>
                {point.highlight && (
                  <strong
                    className={`font-semibold ${
                      isBefore ? 'text-gray-700' : 'text-gray-900'
                    }`}
                  >
                    {point.highlight}
                  </strong>
                )}
                {point.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
