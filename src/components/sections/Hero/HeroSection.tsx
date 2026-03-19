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
  const { isVisible, opacity, imageWidth } = useWindowWidth({
    breakpoint: 1150,
    fadeStart: 1200,
  })

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
        <div className='pt-6 text-white md:pt-5 lg:pt-9'>
          <Text as='display' className='break-keep whitespace-pre-line'>
            {title}
          </Text>
          <Text as='h4' className='pt-5 whitespace-pre-line'>
            {description}
          </Text>
        </div>

        {/* 메타 정보 */}
        <div className='mt-14 grid grid-cols-2 gap-8 border-t border-white/20 pt-6 text-white md:mt-18 md:grid-cols-4 lg:mt-28 lg:flex lg:w-fit lg:gap-20'>
          {meta.map(({ label, values }) => (
            <div key={label}>
              <Text as='p' className='font-bold'>
                {label}
              </Text>
              <div className='pt-2 md:pt-3 lg:pt-4'>
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
        <HeroImage src={image} imageWidth={imageWidth} opacity={opacity} />
      )}
    </div>
  )
}
