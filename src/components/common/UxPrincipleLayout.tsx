'use client'

import Image from 'next/image'
import Text from '../ui/Text/Text'
import SectionHeader from '../ui/SectionHeader/SectionHeader'
import ComparisonCard from '../ui/Cards/ComparisonCard'
import Section from '../ui/Section'
import FadeIn from '../ui/FadeIn'
import { smols } from '@/data/projects'
import type {
  UxPrincipleType,
  ImageConfig,
  Transformation,
} from '@/data/types/smols'

type Props = {
  uxPrinciple: UxPrincipleType
  transformation?: Transformation
  index?: number
  showSectionHeader?: boolean
}

export default function UxPrincipleLayout({
  uxPrinciple,
  showSectionHeader = false,
}: Props) {
  return (
    <Section className='mx-auto w-full max-w-7xl' inner='0'>
      {/*  구역 1: 섹션 헤더 — 0초 */}
      {showSectionHeader && (
        <FadeIn>
          <div className='pt-16 pb-8'>
            <SectionHeader
              badge={smols.sections.solution.badge}
              title={smols.sections.solution.title}
              align='center'
              titleSize='h4'
              badgeTheme='orange'
              className='text-gray-900'
            />
          </div>
        </FadeIn>
      )}

      {/*  구역 2: 원칙 헤더 (넘버링 + 제목) — 0.2초 */}
      <FadeIn delay={0.2}>
        <div className='py-4 text-left'>
          <Text as='h6' className='mb-2 font-bold text-orange-500'>
            {uxPrinciple.numbering}
          </Text>
          <Text
            as='body'
            className='font-extralight whitespace-pre-line text-gray-900'
          >
            {uxPrinciple.title}
          </Text>
        </div>
      </FadeIn>

      {/*  구역 3: 폰 이미지 AS-IS / TO-BE — 0.4초, 0.6초 */}
      <div className='grid grid-cols-2 gap-8 py-6'>
        <FadeIn delay={0.4}>
          <PhoneGroup images={uxPrinciple.asIsImages} altPrefix='AS-IS' />
        </FadeIn>
        <FadeIn delay={0.6}>
          <PhoneGroup images={uxPrinciple.toBeImages} altPrefix='TO-BE' />
        </FadeIn>
      </div>

      {/*  구역 4: 비교 카드 AS-IS → TO-BE — 0.8초, 1.0초, 1.2초 */}
      <div className='flex items-center gap-8 pt-8 pb-16'>
        <FadeIn delay={0.8} className='flex-1'>
          <ComparisonCard
            label='AS-IS'
            points={uxPrinciple.asIsPoints}
            variant='before'
          />
        </FadeIn>
        <FadeIn delay={1.0}>
          <Text as='caption' className='text-2xl font-medium text-gray-900'>
            →
          </Text>
        </FadeIn>
        <FadeIn delay={1.2} className='flex-1'>
          <ComparisonCard
            label='TO-BE'
            points={uxPrinciple.toBePoints}
            variant='after'
          />
        </FadeIn>
      </div>
    </Section>
  )
}

function PhoneGroup({
  images,
  altPrefix,
}: {
  images: ImageConfig[]
  altPrefix: string
}) {
  return (
    <div className='flex items-start justify-center gap-8'>
      {images.map((image, i) => (
        <Image
          key={i}
          src={image.src}
          width={image.imageWidth}
          height={image.imageHeight}
          alt={`${altPrefix}-${i + 1}`}
          className={`h-auto w-[48%] max-w-50 ${i % 2 === 1 ? 'mt-2' : 'mt-0'}`}
        />
      ))}
    </div>
  )
}
