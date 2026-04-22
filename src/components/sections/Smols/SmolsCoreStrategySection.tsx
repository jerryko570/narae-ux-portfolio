import NumberedCard from '@/components/ui/Cards/NumberCard'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import Section from '@/components/ui/Section'
import { smols } from '@/data/projects'

export default function SmolsCoreStrategySection() {
  return (
    <Section className='bg-gray-900' noTopPadding>
      <SectionHeader
        {...smols.sections.uxStrategy}
        className='whitespace-pre-line text-white'
        align='left'
        titleSize='h4'
      />
      <div className='mt-10 grid grid-cols-3 gap-8'>
        {smols.uxStrategy.items.map((item) => (
          <NumberedCard
            key={item.numbering}
            number={item.numbering}
            title={item.title}
            description={item.description}
            theme='dark'
            badgeTheme='white'
          />
        ))}
      </div>
    </Section>
  )
}
