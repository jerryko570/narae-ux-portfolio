import HeroSection from '@/components/sections/Hero/HeroSection'
import SmolsOverviewSection from '@/components/sections/Smols/SmolsOverviewSection'
import SmolsProblemSection from '@/components/sections/Smols/SmolsProblemSection'
import SmolsStickerSection from '@/components/sections/Smols/SmolsStickerSection'
import SmolsUxStrategySection from '@/components/sections/Smols/SmolsUxStrategySection'
import SmolsSolutionSection from '@/components/sections/Smols/SmolsSolutionSection'
import SmolsResultSection from '@/components/sections/Smols/SmolsResultSection'
import SmolsRetrospectiveSection from '@/components/sections/Smols/SmolsRetrospectiveSection'

import { smols } from '@/data/projects'

export default function Home() {
  return (
    <div>
      {smols.heros.map((hero) => (
        <HeroSection key={hero.id} {...hero} />
      ))}
      <SmolsOverviewSection />
      <SmolsProblemSection />
      <SmolsUxStrategySection />
      <SmolsSolutionSection />
      <SmolsStickerSection />
      <SmolsResultSection />
      <SmolsRetrospectiveSection />
    </div>
  )
}
