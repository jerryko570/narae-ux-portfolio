'use client'

import Badge from '@/components/ui/Badge/Badge'
import Text from '@/components/ui/Text/Text'
import HeroImage from '@/components/sections/Curi/CuriHero/CuriHeroImage'
import Section from '@/components/ui/Section'
import FadeIn from '@/components/ui/FadeIn'

type MetaItem = {
  label: string
  values: string[]
}

type HeroSectionProps = {
  badge: string
  badgeText: string[]
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
    <div className='relative min-w-100'>
      {/* 이미지 */}
      <FadeIn delay={1} duration={0.8}>
        <HeroImage src={image} />
      </FadeIn>

      <Section className='w-full bg-pink-500'>
        {/* 배지 */}
        <FadeIn delay={0.1}>
          <div className='inline-flex items-center'>
            <Badge label={badge} size='md' theme='white' radius='full' />
          </div>
        </FadeIn>

        {/* 타이틀 */}
        <FadeIn delay={0.25}>
          <div className='pt-4 whitespace-pre-line text-white'>
            <Text as='h2' className='break-keep'>
              {title}
            </Text>
          </div>
        </FadeIn>

        {/* 설명 */}
        <FadeIn delay={0.4}>
          <Text
            as='p'
            className='pt-8 break-keep whitespace-pre-line text-white'
          >
            {description}
          </Text>
        </FadeIn>

        {/* 뱃지 */}
        <FadeIn delay={0.55}>
          <div className='flex items-center gap-3 pt-6'>
            {badgeText.map((text) => (
              <Badge
                key={text}
                label={text}
                size='xs'
                theme='outlineWhite'
                radius='md'
              />
            ))}
          </div>
        </FadeIn>

        {/* 메타 정보 */}
        <FadeIn delay={0.7}>
          <div className='mt-24 flex w-fit gap-16 border-t border-white/20 pt-8 text-white'>
            {meta.map(({ label, values }) => (
              <div key={label}>
                <Text as='caption' className='font-medium text-white/60'>
                  {label}
                </Text>
                <div className='pt-3'>
                  {values.map((v, index) => (
                    <Text as='caption' key={index} className='font-medium'>
                      {v}
                    </Text>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>
    </div>
  )
}
