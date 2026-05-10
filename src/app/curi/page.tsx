import CuriHeroSection from '@/components/sections/Curi/CuriHero/CuriHeroSection'
import CuriProblemSection from '@/components/sections/Curi/CuriProblemSection'
import CuriBehaviorSection from '@/components/sections/Curi/CuriBehaviorSection'
import CuriCoreStrategySection from '@/components/sections/Curi/CuriCoreStrategySection'
import CuriSolutionSection from '@/components/sections/Curi/CuriSolutionSection'

import CuriResultSection from '@/components/sections/Curi/CuriResultSection'
import CuriFeedSection from '@/components/sections/Curi/CuriFeedSection'
import { curi } from '@/data/projects'
import CuriReleasedSection from '@/components/sections/Curi/CuriReleasedSection'

export default function CuriPage() {
  return (
    <div>
      {curi.heros.map((hero) => (
        <CuriHeroSection key={hero.id} {...hero} />
      ))}
      <CuriProblemSection />
      <CuriBehaviorSection />
      <CuriCoreStrategySection />
      <CuriFeedSection />
      <CuriSolutionSection />
      <CuriReleasedSection />
      <CuriResultSection />
    </div>
  )
}
