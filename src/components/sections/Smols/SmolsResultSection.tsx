import FeatureCard from '@/components/ui/Cards/FeatureCard'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import { smols } from '@/data/projects'
import Section from '@/components/ui/Section'
import type { ProductResult } from '@/data/types/smols'

type ResultItem = ProductResult['items'][number]

export default function SmolsResultSection() {
  return (
    <Section className='bg-gray-900'>
      <SectionHeader
        badgeTheme='orange'
        className='text-white'
        titleSize='h4'
        {...smols.sections.resultSection}
      />

      <div className='grid grid-cols-3 gap-8 pt-16'>
        {smols.result.items.map((item: ResultItem, index: number) => (
          <FeatureCard
            key={index}
            value={item.value}
            title={item.title}
            description={item.description}
            theme='dark'
          />
        ))}
      </div>
    </Section>
  )
}
