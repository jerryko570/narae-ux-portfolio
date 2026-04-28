import SmolsHeroSection from '@/components/sections/Smols/SmolsHero/SmolsHeroSection'
import SmolsProblemSection from '@/components/sections/Smols/SmolsProblemSection'
import SmolsBehaviorSection from '@/components/sections/Smols/SmolsBehaviorSection'
import SmolsCoreStrategySection from '@/components/sections/Smols/SmolsCoreStrategySection'
import SmolsFeedSection from '@/components/sections/Smols/SmolsFeedSection'
import SmolsSolutionSection from '@/components/sections/Smols/SmolsSolutionSection'
import SmolsStickerSection from '@/components/sections/Smols/SmolsStickerSection'
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
      <SmolsFeedSection />
      <SmolsSolutionSection />
      <SmolsStickerSection />
      <SmolsResultSection />
    </div>
  )
}
