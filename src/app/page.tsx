import Section from '@/components/ui/Section'
import HeroSection from '@/components/sections/Hero/HeroSection'
import { smolsHeros, smolsSections } from '@/data/projects'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import StatCard from '@/components/ui/Cards/StatCard'
import UserResearchChatSection from '@/components/sections/UserResearchChatSection'

export default function Home() {
  return (
    <div>
      {/* 히어로 */}
      <div className='bg-orange-500'>
        {smolsHeros.map((smolsHero) => (
          <HeroSection key={smolsHero.id} {...smolsHero} />
        ))}
      </div>

      {/* 서비스 소개 */}
      <Section>
        <SectionHeader {...smolsSections.overview} />
      </Section>

      {/* 문제 발견 */}
      <Section className='bg-black'>
        <SectionHeader
          {...smolsSections.problemEvidence}
          className='text-white'
        />
        <StatCard
          {...smolsSections.problemEvidence.stat}
          theme='dark'
          className='mt-8'
        />

        <div className='mt-40 flex items-start'>
          <SectionHeader
            {...smolsSections.userResearch}
            className='whitespace-pre-line text-white'
          />
          <UserResearchChatSection />
        </div>
      </Section>
    </div>
  )
}
