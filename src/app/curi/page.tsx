import CuriHeroSection from '@/components/sections/Curi/CuriHero/CuriHeroSection'
import CuriProblemSection from '@/components/sections/Curi/CuriProblemSection'
import CuriBehaviorSection from '@/components/sections/Curi/CuriBehaviorSection'
import CuriCoreStrategySection from '@/components/sections/Curi/CuriCoreStrategySection'
import CuriSolutionSection from '@/components/sections/Curi/CuriSolutionSection'
import CuriStickerSection from '@/components/sections/Curi/CuriStickerSection'
import CuriRetrospectiveSection from '@/components/sections/Curi/CuriRetrospectiveSection'
import CuriResultSection from '@/components/sections/Curi/CuriResultSection'
import CuriFeedSection from '@/components/sections/Curi/CuriFeedSection'
import { curi } from '@/data/projects'

export default function CuriPage() {
  return (
    <div>
      {curi.heros.map((hero) => (
        <CuriHeroSection key={hero.id} {...hero} />
      ))}
      <CuriProblemSection />
      <CuriBehaviorSection />
      <CuriCoreStrategySection />
      <CuriSolutionSection />
      <CuriStickerSection />
      <CuriFeedSection />
      <CuriResultSection />
      <CuriRetrospectiveSection />
    </div>
  )
}
