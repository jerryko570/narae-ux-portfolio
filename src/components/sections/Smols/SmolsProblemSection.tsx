import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import StatSection from '@/components/ui/Cards/StatSection'
import HighlightCard from '@/components/ui/Cards/HighlightCard'
import AppReviewSection from '@/components/ui/Cards/UserFeedbackSection'
import { smols } from '@/data/projects'
import type { MetricsSection, InsightSection } from '@/data/types'

export default function SmolsProblemSection() {
  const problemMetrics = smols.sections.problemMetrics as MetricsSection
  const userInsight = smols.sections.userInsight as InsightSection

  return (
    <Section className='bg-gray-900'>
      <SectionHeader
        {...problemMetrics}
        className='whitespace-pre-line text-white'
      />
      <StatSection
        {...problemMetrics.metrics}
        theme='dark'
        className='mt-12 whitespace-pre-line'
      />

      <div className='mt-32'>
        <SectionHeader
          {...userInsight}
          className='whitespace-pre-line text-white'
          align='center'
        />
      </div>
      <AppReviewSection
        className='mt-16'
        data={smols.feedbackData}
        theme='dark'
      />
      <HighlightCard
        className='mt-8'
        description={smols.insightSummary.description}
        theme='dark'
      />

      <SectionHeader
        {...smols.sections.strategy}
        className='pt-32 whitespace-pre-line text-white'
        align='center'
      />
      <div className='flex gap-8 whitespace-pre-line'>
        {smols.strategy.map((item) => (
          <HighlightCard
            key={item.title}
            className='mt-16'
            imageClassName='max-w-60'
            {...item}
            theme='dark'
          />
        ))}
      </div>
    </Section>
  )
}
