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
  badgeText: string[]
  title: string
  meta: MetaItem[]
  image: string
}

export default function HeroSection({
  badge,
  badgeText,
  title,
  meta,
  image,
}: HeroSectionProps) {
  return (
    <div className='relative min-w-[400px]'>
      <Section className='w-full bg-orange-500'>
        {/* 배지 */}
        <div className='inline-flex items-center'>
          <Badge label={badge} size='md' theme='white' radius='full' />
        </div>

        {/* 타이틀 */}
        <div className='pt-4 whitespace-pre-line text-white'>
          <Text as='display' className='break-keep'>
            {title}
          </Text>
        </div>
        {/* 뱃지 */}
        <div className='flex items-center gap-4 pt-8'>
          {badgeText.map((text, i) => (
            <Badge
              key={i}
              label={text}
              size='sm'
              theme='outlineWhite'
              radius='md'
            />
          ))}
        </div>

        {/* 메타 정보 */}
        <div className='mt-32 flex w-fit gap-24 border-t border-white/20 pt-8 text-white'>
          {meta.map(({ label, values }) => (
            <div key={label}>
              <Text as='caption' className='font-light'>
                {label}
              </Text>
              <div className='pt-3'>
                {values.map((v, index) => (
                  <Text as='p' key={index} className='font-bold'>
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
