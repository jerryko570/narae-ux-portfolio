'use client'

import Image from 'next/image'
import Text from '../ui/Text/Text'
import SectionHeader from '../ui/SectionHeader/SectionHeader'
import Section from '../ui/Section'
import Badge from '../ui/Badge/Badge'
import FadeIn from '../ui/FadeIn'
import type {
  UxPrincipleType,
  ImageConfig,
} from '@/data/types/common/uxPrinciple.types'

type Theme = 'orange' | 'pink'

type Props = {
  uxPrinciple: UxPrincipleType
  theme?: Theme
  sectionHeader?: {
    badge?: string
    title?: string
  }
  /** 패널 외부에서 스타일 제어용 (배경/링/패딩 등) */
  beforePanelClassName?: string
  afterPanelClassName?: string
}

const themeStyles = {
  orange: {
    accent: 'text-orange-500',
    badgeTheme: 'outlineOrange' as const,
    divider: 'divide-orange-100',
  },
  pink: {
    accent: 'text-pink-500',
    badgeTheme: 'outlinePink' as const,
    divider: 'divide-pink-100',
  },
} as const

type Point = {
  highlight?: string
  text: string
}

export default function UxPrincipleLayout({
  uxPrinciple,
  theme = 'orange',
  sectionHeader,
  beforePanelClassName = '',
  afterPanelClassName = '',
}: Props) {
  const styles = themeStyles[theme]

  return (
    <Section className='mx-auto w-full max-w-7xl' inner='0'>
      {/* 구역 1: 섹션 헤더 (옵션) */}
      {sectionHeader && (
        <div className='pt-16'>
          <FadeIn>
            <SectionHeader
              badge={sectionHeader.badge}
              title={sectionHeader.title}
              align='center'
              titleSize='h4'
              badgeTheme={theme}
            />
          </FadeIn>
        </div>
      )}

      {/* 구역 2: 원칙 헤더 */}
      <FadeIn>
        <div className='py-8'>
          <div className='flex items-center gap-5'>
            {uxPrinciple.icon && (
              <div
                role='img'
                aria-label='principle-icon'
                className='flex h-16 w-16 items-center justify-center rounded-3xl border border-gray-200 bg-white'
              >
                <Text as='h4'>{uxPrinciple.icon}</Text>
              </div>
            )}

            <div className='flex flex-col'>
              <Text
                as='p'
                className={`font-bold tracking-wide ${styles.accent}`}
              >
                {uxPrinciple.numbering}
              </Text>
              <Text as='h6' className='font-extralight whitespace-pre-line'>
                {uxPrinciple.title}
              </Text>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 구역 3: AS-IS / TO-BE 2패널 */}
      <div className='relative grid grid-cols-2 items-stretch gap-8'>
        <FadeIn delay={0.1} duration={0.7}>
          <ComparisonPanel
            variant='before'
            images={uxPrinciple.asIsImages}
            points={uxPrinciple.asIsPoints}
            styles={styles}
            className={beforePanelClassName}
          />
        </FadeIn>

        <FadeIn delay={0.5} duration={0.7}>
          <ComparisonPanel
            variant='after'
            images={uxPrinciple.toBeImages}
            points={uxPrinciple.toBePoints}
            styles={styles}
            className={afterPanelClassName}
          />
        </FadeIn>

        {/* 가운데 화살표 */}
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
              className={styles.accent}
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

/* ───────── ComparisonPanel ───────── */
function ComparisonPanel({
  variant,
  images,
  points,
  styles,
  className = '',
}: {
  variant: 'before' | 'after'
  images: ImageConfig[]
  points: Point[]
  styles: (typeof themeStyles)[Theme]
  className?: string
}) {
  const isBefore = variant === 'before'

  return (
    <div className={`flex h-full flex-col ${className}`}>
      <div className='mb-6 flex items-center justify-between'>
        <Badge
          label={isBefore ? 'AS-IS' : 'TO-BE'}
          theme={isBefore ? 'outlineDark' : styles.badgeTheme}
          size='sm'
          className='w-fit'
        />
      </div>

      <div className='flex h-90 items-center justify-center gap-5'>
        {images.map((image, i) => (
          <Image
            key={i}
            src={image.src}
            width={image.imageWidth}
            height={image.imageHeight}
            alt={`${isBefore ? 'AS-IS' : 'TO-BE'}-${i + 1}`}
            className='h-full w-auto max-w-70 object-contain'
            quality={100}
            unoptimized
            sizes='(max-width: 768px) 50vw, 280px'
          />
        ))}
      </div>

      <div className='pt-10'>
        <ul
          className={`divide-y ${
            isBefore ? 'divide-gray-100' : styles.divider
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
