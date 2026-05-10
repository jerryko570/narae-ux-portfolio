// Curi 문제정의 영역
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import AppReviewSection from '@/components/ui/Cards/UserFeedbackSection'
import FadeIn from '@/components/ui/FadeIn'
import { curi } from '@/data/projects'

export default function CuriProblemSection() {
  const problemMetrics = curi.sections.problemMetrics

  return (
    <Section className='bg-gray-800'>
      {/* BEHAVIOR INSIGHT */}
      <FadeIn delay={0.2}>
        <SectionHeader
          {...problemMetrics}
          titleSize='h4'
          badgeTheme='whitePink'
          className='whitespace-pre-line text-white'
        />
      </FadeIn>

      <FadeIn delay={0.25}>
        <AppReviewSection
          className='mt-10'
          data={curi.feedbackData}
          theme='white'
          valueClassName='text-pink-500'
          barClassName='bg-pink-500'
        />
      </FadeIn>
    </Section>
  )
}
