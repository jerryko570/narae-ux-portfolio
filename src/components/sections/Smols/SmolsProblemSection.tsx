// Smols 문제정의 영역
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import AppReviewSection from '@/components/ui/Cards/UserFeedbackSection'
import FadeIn from '@/components/ui/FadeIn'
import { smols } from '@/data/projects'

export default function CuriProblemSection() {
  const problemMetrics = smols.sections.problemMetrics

  return (
    <Section className='bg-gray-900'>
      {/* BEHAVIOR INSIGHT */}
      <FadeIn delay={0.1}>
        <SectionHeader
          {...problemMetrics}
          titleSize='h4'
          className='whitespace-pre-line text-white'
        />
      </FadeIn>

      <FadeIn delay={0.25}>
        <AppReviewSection
          className='mt-10'
          data={smols.feedbackData}
          theme='dark'
        />
      </FadeIn>
    </Section>
  )
}
