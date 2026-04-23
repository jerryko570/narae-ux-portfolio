import SmolsHeroSection from '@/components/sections/Smols/SmolsHero/SmolsHeroSection'
import SmolsProblemSection from '@/components/sections/Smols/SmolsProblemSection'
import SmolsBehaviorSection from '@/components/sections/Smols/SmolsBehaviorSection'
import SmolsCoreStrategySection from '@/components/sections/Smols/SmolsCoreStrategySection'
import SmolsSolutionSection from '@/components/sections/Smols/SmolsSolutionSection'
import SmolsStickerSection from '@/components/sections/Smols/SmolsStickerSection'
import SmolsRetrospectiveSection from '@/components/sections/Smols/SmolsRetrospectiveSection'
import SmolsResultSection from '@/components/sections/Smols/SmolsResultSection'

import { smols } from '@/data/projects'

export default function SmolsPage() {
  return (
    <div>
      {smols.heros.map((hero) => (
        <SmolsHeroSection key={hero.id} {...hero} />
      ))}

      <SmolsProblemSection />
      <SmolsBehaviorSection />
      <SmolsCoreStrategySection />
      <SmolsSolutionSection />
      <SmolsStickerSection />
      <SmolsResultSection />
      <SmolsRetrospectiveSection />
    </div>
  )
}
