import FeatureCard from '@/components/ui/Cards/FeatureCard'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import { smols } from '@/data/projects'
import Section from '@/components/ui/Section'
import type { ProductResult } from '@/data/types/smols'

type ResultItem = ProductResult['items'][number]

export default function SmolsResultSection() {
  return (
    <Section className='bg-orange-500'>
      <SectionHeader {...smols.sections.resultSection}></SectionHeader>

      <div className='grid grid-cols-3 gap-8 pt-16'>
        {smols.result.items.map((item: ResultItem, index: number) => (
          <FeatureCard
            key={index}
            emoji={item.emoji}
            title={item.title}
            description={item.description}
            theme='lightOrange'
          />
        ))}
      </div>
    </Section>
  )
}
