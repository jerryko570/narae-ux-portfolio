// 개선방향 영역

import NumberedCard from '@/components/ui/Cards/NumberCard'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import Section from '@/components/ui/Section'
import FadeIn from '@/components/ui/FadeIn'
import { curi } from '@/data/projects'

export default function CuriCoreStrategySection() {
  return (
    <Section className='bg-gray-100' noTopPadding>
      <FadeIn delay={0.1}>
        <SectionHeader
          {...curi.sections.uxStrategy}
          className='text-dark-900 whitespace-pre-line'
          align='left'
          badgeTheme='pink'
          titleSize='h4'
        />
      </FadeIn>

      <div className='mt-10 grid grid-cols-3 gap-8'>
        {curi.uxStrategy.items.map((item, index) => (
          <FadeIn key={item.numbering} delay={0.25 + index * 0.15}>
            <NumberedCard
              number={item.numbering}
              title={item.title}
              description={item.description}
              theme='white'
              badgeTheme='lightDark'
              className='transition-all duration-300 hover:-translate-y-1 hover:bg-white'
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
