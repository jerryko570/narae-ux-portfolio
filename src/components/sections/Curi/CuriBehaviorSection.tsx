// 리서치 영역

import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import Section from '@/components/ui/Section'
import HorizontalCardList from '@/components/ui/Cards/HorizontalCardList'
import ChartInsightSection from '@/components/ui/Cards/ChartInsightSection'
import FadeIn from '@/components/ui/FadeIn'
import { curi } from '@/data/projects'

export default function CuriBehaviorSection() {
  const { userBehavior } = curi

  return (
    <Section className='bg-gray-100'>
      <FadeIn delay={0.1}>
        <SectionHeader
          {...curi.sections.feedbackAnalysis}
          titleSize='h4'
          className='text-gray-900'
          align='center'
          badgeTheme='pink'
        />
      </FadeIn>

      <div className='mt-10 flex flex-col gap-8'>
        <FadeIn delay={0.25}>
          <HorizontalCardList
            items={userBehavior.methodology}
            theme='white'
            className='bg-white'
          />
        </FadeIn>

        <FadeIn delay={0.4}>
          <ChartInsightSection
            {...userBehavior.firstActionCard}
            theme='white'
            className='bg-white'
          />
        </FadeIn>
      </div>
    </Section>
  )
}
