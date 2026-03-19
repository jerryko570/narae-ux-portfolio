import FeatureCard from '@/components/ui/Cards/FeatureCard'
import Section from '@/components/ui/Section'
import { SmolsFeatureCardData } from '@/data/cards'
import HeroSection from '@/components/sections/Hero/HeroSection'
import { smolsProjects } from '@/data/projects'

export default function Home() {
  return (
    <div>
      <div className='bg-orange-500'>
        {smolsProjects.map((project) => (
          <HeroSection key={project.id} {...project} />
        ))}
      </div>

      <Section className=''>
        <div className='rounded-xl bg-orange-50'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {SmolsFeatureCardData.map((card) => (
              <FeatureCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
