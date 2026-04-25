// 회고 영역

import FeatureCard from '@/components/ui/Cards/FeatureCard'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import FadeIn from '@/components/ui/FadeIn'
import { smols } from '@/data/projects'
import Section from '@/components/ui/Section'
import type { ProductResult } from '@/data/types/smols'

type ResultItem = ProductResult['items'][number]

export default function SmolsResultSection() {
  return (
    <Section className='bg-gray-900'>
      <FadeIn>
        <SectionHeader
          badgeTheme='orange'
          className='text-white'
          titleSize='h4'
          {...smols.sections.resultSection}
        />
      </FadeIn>

      <div className='grid grid-cols-3 gap-8 pt-10'>
        {smols.result.items.map((item: ResultItem, index: number) => (
          <FadeIn key={index} delay={0.2 + index * 0.15}>
            <FeatureCard
              value={item.value}
              title={item.title}
              description={item.description}
              theme='dark'
              className='transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700'
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
