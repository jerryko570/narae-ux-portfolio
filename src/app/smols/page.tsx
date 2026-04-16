import HeroSection from '@/components/sections/Hero/HeroSection'
import SmolsProblemSection from '@/components/sections/Smols/SmolsProblemSection'
import SmolsUxStrategySection from '@/components/sections/Smols/SmolsUxStrategySection'
import SmolsSolutionSection from '@/components/sections/Smols/SmolsSolutionSection'
import SmolsRetrospectiveSection from '@/components/sections/Smols/SmolsRetrospectiveSection'

import { smols } from '@/data/projects'

export default function SmolsPage() {
  return (
    <div>
      {smols.heros.map((hero) => (
        <HeroSection key={hero.id} {...hero} />
      ))}

      <SmolsProblemSection />
      <SmolsUxStrategySection />
      <SmolsSolutionSection />
      <SmolsRetrospectiveSection />
    </div>
  )
}
