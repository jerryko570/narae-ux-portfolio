import Section from '@/components/ui/Section'
import Text from '@/components/ui/Text/Text'
import Badge from '@/components/ui/Badge/Badge'
import FadeIn from '@/components/ui/FadeIn'
import DesignerToggle from './DesignerToggle'
import { aboutHero } from '@/data/projects/about'

export default function AboutHeroSection() {
  return (
    <Section className='bg-white'>
      <div className='flex items-start justify-between'>
        {/* 왼쪽 — 타이틀 + 설명 */}
        <FadeIn>
          <div className='max-w-lg'>
            <Text as='h2' className='break-keep text-gray-900'>
              문제를 구조로 정의하고
              <br />
              구현까지 연결하는
              <br />
              <DesignerToggle />
            </Text>
            <Text as='p' className='mt-12 whitespace-pre-line text-gray-900'>
              {aboutHero.description}
            </Text>
          </div>
        </FadeIn>

        {/* 오른쪽 — Award */}
        <FadeIn delay={0.3}>
          <div className='mt-6 flex w-97 flex-col gap-6 border-l border-white/20 pl-8'>
            <div>
              <Text as='h6' className='text-gray-900'>
                Award
              </Text>

              <div className='flex flex-col gap-8 pt-6 whitespace-pre-line'>
                {aboutHero.awards.map((award, i) => (
                  <FadeIn key={award.year} delay={0.4 + i * 0.15}>
                    <div>
                      <div className='flex items-center gap-2'>
                        <Text as='p' className='font-medium text-gray-900'>
                          {award.year}
                        </Text>
                        <Badge
                          label={award.label}
                          theme='blue'
                          size='xs'
                          weight='medium'
                          radius='md'
                        />
                      </div>
                      <Text as='caption' className='mt-3 block text-gray-500'>
                        {award.description}
                      </Text>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}
