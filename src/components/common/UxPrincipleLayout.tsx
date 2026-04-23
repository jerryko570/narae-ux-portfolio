'use client'

import Image from 'next/image'
import Text from '../ui/Text/Text'
import SectionHeader from '../ui/SectionHeader/SectionHeader'
import ComparisonCard from '../ui/Cards/ComparisonCard'
import Section from '../ui/Section'
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
    <Section className='mx-auto w-full max-w-7xl'>
      {/* 상단: 섹션 헤더 (옵션) */}
      {showSectionHeader && (
        <div className='mb-12'>
          <SectionHeader
            badge={smols.sections.solution.badge}
            title={smols.sections.solution.title}
            align='left'
            titleSize='h4'
            badgeTheme='orange'
            className='text-gray-900'
          />
        </div>
      )}

      {/* 원칙 헤더: 넘버링 · 제목 · 키워드 */}
      <div className='mb-10'>
        <div className='text-center'>
          <Text as='body' className='mb-2 font-bold text-orange-500'>
            {uxPrinciple.numbering}
          </Text>

          <Text
            as='h6'
            className='mb-8 font-extralight whitespace-pre-line text-gray-900'
          >
            {uxPrinciple.title}
          </Text>
        </div>
      </div>

      {/* 중간: 폰 이미지 AS-IS 그룹 / TO-BE 그룹 */}
      <div className='mb-16 grid grid-cols-2 gap-8'>
        <PhoneGroup images={uxPrinciple.asIsImages} altPrefix='AS-IS' />
        <PhoneGroup images={uxPrinciple.toBeImages} altPrefix='TO-BE' />
      </div>

      {/* 하단: AS-IS → TO-BE 비교 카드 */}
      <div className='flex items-center gap-8'>
        <ComparisonCard
          label='AS-IS'
          points={uxPrinciple.asIsPoints}
          variant='before'
        />
        <Text as='caption' className='text-2xl font-medium text-gray-900'>
          →
        </Text>
        <ComparisonCard
          label='TO-BE'
          points={uxPrinciple.toBePoints}
          variant='after'
        />
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
          className={`h-auto w-[48%] max-w-50 ${i % 2 === 1 ? 'mt-4' : 'mt-0'}`}
        />
      ))}
    </div>
  )
}
