import FeatureCard from '@/components/ui/Cards/FeatureCard'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import { smols } from '@/data/projects'
import Section from '@/components/ui/Section'

export default function SmolsResultSection() {
  return (
    <Section>
      <SectionHeader {...smols.sections.resultSection}></SectionHeader>

      <div className='grid grid-cols-3 gap-8 pt-16'>
        {smols.productResult.items.map((item, index) => (
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
