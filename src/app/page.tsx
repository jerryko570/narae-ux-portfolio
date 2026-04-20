import HomeTitleSection from '@/components/sections/Home/HomeTitleSection'
import HomeCardSection from '@/components/sections/Home/HomeCardSection'
import HomeContact from '@/components/sections/Home/HomeContact'
import Section from '@/components/ui/Section'
import FadeIn from '@/components/ui/FadeIn'

export default function MainPage() {
  return (
    <Section inner='50'>
      <div className='flex items-start justify-between gap-8'>
        <FadeIn>
          <HomeTitleSection />
        </FadeIn>
        <FadeIn delay={0.2}>
          <HomeContact />
        </FadeIn>
      </div>

      <HomeCardSection />
    </Section>
  )
}
