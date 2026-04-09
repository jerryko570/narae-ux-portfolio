import HomeTitleSection from '@/components/sections/Home/HomeTitleSection'
import HomeCardSection from '@/components/sections/Home/HomeCardSection'
import HomeContactSection from '@/components/sections/Home/HomeContactSection'

import Section from '@/components/ui/Section'
export default function MainPage() {
  return (
    <Section>
      <div>
        <div className='flex items-center justify-between'>
          <HomeTitleSection />
          <HomeContactSection />
        </div>
        <HomeCardSection />
      </div>
    </Section>
  )
}
