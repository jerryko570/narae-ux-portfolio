import Section from '@/components/ui/Section'
import Text from '@/components/ui/Text/Text'
import NumberedCard from '@/components/ui/Cards/NumberCard'
import FadeIn from '@/components/ui/FadeIn'
import { aboutStrengths } from '@/data/projects/about'

export default function AboutStrengthSection() {
  return (
    <Section className='bg-blue-200'>
      <FadeIn>
        <Text as='h4' className='mb-6 font-bold'>
          이런 디자이너입니다
        </Text>
      </FadeIn>

      <div className='grid grid-cols-3 gap-6'>
        {aboutStrengths.map((item, i) => (
          <FadeIn key={item.number} delay={0.2 + i * 0.15}>
            <NumberedCard
              number={item.number}
              title={item.title}
              description={item.description}
              theme='white'
              badgeTheme={item.badgeTheme}
              className='hover:bg-blue-100'
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
