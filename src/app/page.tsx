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
import NumberedCard from '@/components/ui/Cards/NumberedCard'
import Image from 'next/image'

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
          <UserResearchChatSection image={userInsight.image} />
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
          theme='dark'
        />

        <SectionHeader
          {...smols.sections.strategy}
          className='pt-40 whitespace-pre-line text-white'
          align='center'
        />

        <div className='flex gap-8'>
          {smols.strategy.map((item) => (
            <HighlightCard
              key={item.title}
              className='mt-16'
              {...item}
              theme='dark'
            />
          ))}
        </div>
      </Section>

      <div className='bg-white'>
        <Section>
          <div className='relative flex items-start justify-between'>
            <SectionHeader
              {...smols.sections.uxStrategy}
              className='whitespace-pre-line text-black'
              align='left'
            />
            <Image
              src='/images/smols/mockups/ux-strategy-character.svg'
              alt='ux strategy character'
              width={300}
              height={300}
              className='absolute top-0 right-0'
            />
          </div>

          <div className='flex gap-8 pt-16'>
            {smols.uxStrategy.items.map((item) => (
              <NumberedCard
                key={item.number}
                number={item.number}
                title={item.title}
                description={item.description}
                theme='lightOrange'
              />
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}
