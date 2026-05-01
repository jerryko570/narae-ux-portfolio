// 회고 영역

import FeatureCard from '@/components/ui/Cards/FeatureCard'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import FadeIn from '@/components/ui/FadeIn'
import { curi } from '@/data/projects'
import Section from '@/components/ui/Section'
import type { ProductResult } from '@/data/types/curi'

type ResultItem = ProductResult['items'][number]

export default function CurisResultSection() {
  return (
    <Section className='bg-gray-800'>
      <FadeIn>
        <SectionHeader
          badgeTheme='pink'
          className='text-white'
          titleSize='h4'
          {...curi.sections.resultSection}
        />
      </FadeIn>

      <div className='grid grid-cols-2 gap-8 pt-10'>
        {curi.result.items.map((item: ResultItem, index: number) => (
          <FadeIn key={index} delay={0.2 + index * 0.15}>
            <FeatureCard
              value={item.value}
              title={item.title}
              description={item.description}
              theme='dark'
              valueClassName='text-pink-500'
              className='bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700'
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
