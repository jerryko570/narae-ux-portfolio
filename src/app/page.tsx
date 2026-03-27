import Section from '@/components/ui/Section'
import HeroSection from '@/components/sections/Hero/HeroSection'
import { smols } from '@/data/projects'
import type { MetricsSection, InsightSection } from '@/data/types'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import StatSection from '@/components/ui/Cards/StatSection'
import UserResearchChatSection from '@/components/sections/UserResearchChatSection'
import StatCard from '@/components/ui/Cards/StatCard'
import HighlightCard from '@/components/ui/Cards/HighlightCard'
import AppReviewSection from '@/components/ui/Cards/UserFeedbackSection'

export default function Home() {
  const problemMetrics = smols.sections.problemMetrics as MetricsSection
  const userInsight = smols.sections.userInsight as InsightSection
  const { researchSummary } = userInsight

  return (
    <div>
      <div className='bg-orange-500'>
        {smols.heros.map((hero) => (
          <HeroSection key={hero.id} {...hero} />
        ))}
      </div>

      <Section>
        <SectionHeader {...smols.sections.overview} />
      </Section>

      <Section className='bg-gray-900'>
        <SectionHeader {...problemMetrics} className='text-white' />
        <StatSection
          {...problemMetrics.metrics}
          theme='dark'
          className='mt-16'
        />

        <div className='mt-40 flex items-start'>
          <SectionHeader
            {...userInsight}
            className='whitespace-pre-line text-white'
          />
          <UserResearchChatSection />
        </div>

        <SectionHeader
          {...smols.sections.feedbackAnalysis}
          className='pt-40 whitespace-pre-line text-white'
        />

        <div className='mt-16 grid grid-cols-2 items-stretch gap-8'>
          <StatCard {...researchSummary.who} theme='dark' />
          <StatCard {...researchSummary.what} theme='dark' />
        </div>

        <AppReviewSection
          className='mt-8'
          data={smols.feedbackData}
          theme='dark'
        />

        <HighlightCard
          className='mt-8'
          description={smols.insightSummary.description}
          theme='orange'
        />

        <SectionHeader
          {...smols.sections.feedbackAnalysis}
          className='pt-40 whitespace-pre-line text-white'
        />
      </Section>
    </div>
  )
}
