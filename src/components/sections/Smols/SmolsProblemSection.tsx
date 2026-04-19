import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import AppReviewSection from '@/components/ui/Cards/UserFeedbackSection'
import NumberedCard from '@/components/ui/Cards/NumberCard'
import { smols } from '@/data/projects'
import type { MetricsSection } from '@/data/types/smols'
import { smolsProblemStats } from '@/data/projects/smols/strategy'

export default function SmolsProblemSection() {
  const problemMetrics = smols.sections.problemMetrics as MetricsSection

  return (
    <Section className='bg-gray-900'>
      {/* BEHAVIOR INSIGHT */}
      <SectionHeader
        {...problemMetrics}
        className='whitespace-pre-line text-white'
      />
      <AppReviewSection
        className='mt-10'
        data={smols.feedbackData}
        theme='dark'
        stats={smolsProblemStats}
      />

      {/* CORE STRATEGY */}
      <div className='mt-24'>
        <SectionHeader
          {...smols.sections.uxStrategy}
          className='whitespace-pre-line text-white'
          align='left'
        />
        <div className='grid grid-cols-3 gap-8 pt-10'>
          {smols.uxStrategy.items.map((item) => (
            <NumberedCard
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
              theme='dark'
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
