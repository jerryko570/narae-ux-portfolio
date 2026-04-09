import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import NumberedCard from '@/components/ui/Cards/ProjectCard'
import { smols } from '@/data/projects'

export default function SmolsUxStrategySection() {
  return (
    <div className='bg-white'>
      <Section>
        <div className='flex items-start justify-between'>
          <SectionHeader
            {...smols.sections.uxStrategy}
            className='whitespace-pre-line text-black'
            align='left'
          />
        </div>
        <div className='flex gap-8 pt-16'>
          {smols.uxStrategy.items.map((item) => (
            <NumberedCard
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
              theme='lightOrange'
            />
          ))}
        </div>
      </Section>
    </div>
  )
}
