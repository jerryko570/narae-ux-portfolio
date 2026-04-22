import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import Section from '@/components/ui/Section'
import HorizontalCardList from '@/components/ui/Cards/HorizontalCardList'
import ChartInsightSection from '@/components/ui/Cards/ChartInsightSection'
import { smols } from '@/data/projects'

export default function SmolsBehaviorSection() {
  const { userBehavior } = smols

  return (
    <Section className='bg-gray-900' noTopPadding>
      <SectionHeader
        {...smols.sections.feedbackAnalysis}
        titleSize='h4'
        className='text-white'
        align='center'
      />

      <div className='mt-10 flex flex-col gap-8'>
        <HorizontalCardList items={userBehavior.methodology} theme='dark' />
        <ChartInsightSection {...userBehavior.firstActionCard} theme='dark' />
      </div>
    </Section>
  )
}
