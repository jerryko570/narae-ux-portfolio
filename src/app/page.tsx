import HomeTitleSection from '@/components/sections/Home/HomeTitleSection'
import HomeCardSection from '@/components/sections/Home/HomeCardSection'
import Section from '@/components/ui/Section'

export default function MainPage() {
  return (
    <Section inner='50'>
      <div className='flex items-center justify-between'>
        <HomeTitleSection />
      </div>
      <HomeCardSection />
    </Section>
  )
}
