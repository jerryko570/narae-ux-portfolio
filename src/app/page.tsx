import Section from '@/components/ui/Section'
import HeroSection from '@/components/sections/Hero/HeroSection'
import { smolsHeros, smolsSections } from '@/data/projects'
import type { ProblemEvidenceSection, UserResearchSection } from '@/data/types' // ← 추가
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import StatCardAnimated from '@/components/ui/Cards/StatCardAnimated'
import UserResearchChatSection from '@/components/sections/UserResearchChatSection'
import HighlightCard from '@/components/ui/Cards/HighlightCard'

export default function Home() {
  const problemEvidence =
    smolsSections.problemEvidence as ProblemEvidenceSection
  const userResearch = smolsSections.userResearch as UserResearchSection

  return (
    <div>
      <div className='bg-orange-500'>
        {smolsHeros.map((hero) => (
          <HeroSection key={hero.id} {...hero} />
        ))}
      </div>

      <Section>
        <SectionHeader {...smolsSections.overview} />
      </Section>

      <Section className='bg-gray-900'>
        <SectionHeader {...problemEvidence} className='text-white' />
        <StatCardAnimated
          {...problemEvidence.stat}
          theme='dark'
          className='mt-16'
        />

        <div className='mt-40 flex items-start'>
          <SectionHeader
            {...userResearch}
            className='whitespace-pre-line text-white'
          />
          <UserResearchChatSection />
        </div>

        <HighlightCard
          description={userResearch.highlight}
          theme='orange'
          className='mt-26 p-10 text-center whitespace-pre-line text-white'
        />
      </Section>
    </div>
  )
}
