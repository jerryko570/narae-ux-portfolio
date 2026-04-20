import HomeTitleSection from '@/components/sections/Home/HomeTitleSection'
import HomeCardSection from '@/components/sections/Home/HomeCardSection'
// MainPage
import HomeContact from '@/components/sections/Home/HomeContact'
import Section from '@/components/ui/Section'

export default function MainPage() {
  return (
    <Section inner='50'>
      <div className='flex items-start justify-between gap-8'>
        <HomeTitleSection />
        <HomeContact />
      </div>
      <HomeCardSection />
    </Section>
  )
}
