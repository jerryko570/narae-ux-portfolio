import NumberedCard from '@/components/ui/Cards/NumberCard'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import Section from '@/components/ui/Section'
import FadeIn from '@/components/ui/FadeIn'
import { smols } from '@/data/projects'

export default function SmolsCoreStrategySection() {
  return (
    <Section className='bg-gray-900' noTopPadding>
      <FadeIn delay={0.1}>
        <SectionHeader
          {...smols.sections.uxStrategy}
          className='whitespace-pre-line text-white'
          align='left'
          titleSize='h4'
        />
      </FadeIn>

      <div className='mt-10 grid grid-cols-3 gap-8'>
        {smols.uxStrategy.items.map((item, index) => (
          <FadeIn key={item.numbering} delay={0.25 + index * 0.15}>
            <NumberedCard
              number={item.numbering}
              title={item.title}
              description={item.description}
              theme='dark'
              badgeTheme='outlineOrange'
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
