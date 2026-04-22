import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import Section from '@/components/ui/Section'
import HorizontalCardList from '@/components/ui/Cards/HorizontalCardList'
import ChartInsightSection from '@/components/ui/Cards/ChartInsightSection'
import FadeIn from '@/components/ui/FadeIn'
import { smols } from '@/data/projects'

export default function SmolsBehaviorSection() {
  const { userBehavior } = smols

  return (
    <Section className='bg-gray-900' noTopPadding>
      <FadeIn delay={0.1}>
        <SectionHeader
          {...smols.sections.feedbackAnalysis}
          titleSize='h4'
          className='text-white'
          align='center'
        />
      </FadeIn>

      <div className='mt-10 flex flex-col gap-8'>
        <FadeIn delay={0.25}>
          <HorizontalCardList items={userBehavior.methodology} theme='dark' />
        </FadeIn>

        <FadeIn delay={0.4}>
          <ChartInsightSection {...userBehavior.firstActionCard} theme='dark' />
        </FadeIn>
      </div>
    </Section>
  )
}
