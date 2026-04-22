import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import AppReviewSection from '@/components/ui/Cards/UserFeedbackSection'
import { smols } from '@/data/projects'
import type { MetricsSection } from '@/data/types/smols'

export default function SmolsProblemSection() {
  const problemMetrics = smols.sections.problemMetrics as MetricsSection

  return (
    <Section className='bg-gray-900'>
      {/* BEHAVIOR INSIGHT */}
      <SectionHeader
        {...problemMetrics}
        titleSize='h4'
        className='whitespace-pre-line text-white'
      />
      <AppReviewSection
        className='mt-10'
        data={smols.feedbackData}
        theme='dark'
      />
    </Section>
  )
}
