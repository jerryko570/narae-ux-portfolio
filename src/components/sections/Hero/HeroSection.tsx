'use client'

import Badge from '@/components/ui/Badge/Badge'
import Text from '@/components/ui/Text/Text'
import HeroImage from './HeroImage'
import Section from '@/components/ui/Section'
import { useWindowWidth } from '@/hooks/useWindowWidth'

type MetaItem = {
  label: string
  values: string[]
}

type HeroSectionProps = {
  badge: string
  badgeText: string
  title: string
  description: string
  meta: MetaItem[]
  image: string
}

export default function HeroSection({
  badge,
  badgeText,
  title,
  description,
  meta,
  image,
}: HeroSectionProps) {
  const { isVisible, imageWidth, width } = useWindowWidth({
    breakpoint: 1070, // 1070px 이하에서 사라짐
    fadeStart: 1150, // 1000~1150px 구간에서 서서히 나타남
  })

  const right = Math.min(80, Math.max(20, (width - 1150) * 0.05))

  return (
    <div className='relative'>
      <Section className='w-full bg-orange-500'>
        {/* 배지 */}
        <div className='inline-flex items-center'>
          <Badge label={badge} size='md' theme='white' />
          <Text as='p' className='pl-3 font-semibold text-white'>
            {badgeText}
          </Text>
        </div>

        {/* 타이틀 */}
        <div className='pt-8 text-white lg:pt-16'>
          <Text as='display' className='break-keep whitespace-pre-line'>
            {title}
          </Text>
          <Text as='h4' className='pt-8 whitespace-pre-line'>
            {description}
          </Text>
        </div>

        {/* 메타 정보 */}
        <div className='mt-16 grid grid-cols-2 gap-8 border-t border-white/20 pt-8 text-white md:mt-24 md:grid-cols-4 lg:mt-32 lg:flex lg:w-fit lg:gap-16'>
          {meta.map(({ label, values }) => (
            <div key={label}>
              <Text as='p' className='font-bold'>
                {label}
              </Text>
              <div className='pt-4 md:pt-4 lg:pt-4'>
                {values.map((v, index) => (
                  <Text as='p' key={index}>
                    {v}
                  </Text>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 이미지 */}
      {isVisible && (
        <HeroImage src={image} imageWidth={imageWidth} right={right} />
      )}
    </div>
  )
}
