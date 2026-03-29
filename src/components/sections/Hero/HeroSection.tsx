'use client'

import Badge from '@/components/ui/Badge/Badge'
import Text from '@/components/ui/Text/Text'
import HeroImage from './HeroImage'
import Section from '@/components/ui/Section'

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
  return (
    <div className='relative min-w-400'>
      <Section className='w-full bg-orange-500'>
        {/* 배지 */}
        <div className='inline-flex items-center'>
          <Badge label={badge} size='md' theme='white' />
          <Text as='p' className='pl-4 font-semibold text-white'>
            {badgeText}
          </Text>
        </div>

        {/* 타이틀 */}
        <div className='pt-4 whitespace-pre-line text-white'>
          <Text as='display' className='break-keep'>
            {title}
          </Text>
          <Text as='h6' className='pt-12'>
            {description}
          </Text>
        </div>

        {/* 메타 정보 */}
        <div className='mt-40 flex w-fit gap-16 border-t border-white/20 pt-8 text-white'>
          {meta.map(({ label, values }) => (
            <div key={label}>
              <Text as='p' className='font-bold'>
                {label}
              </Text>
              <div className='pt-3'>
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
      <HeroImage src={image} />
    </div>
  )
}
