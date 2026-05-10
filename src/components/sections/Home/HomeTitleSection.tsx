import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import { HomeHeros } from '@/data/projects/home'

export default function HomeHeroSection() {
  return (
    <SectionHeader
      title={HomeHeros.title}
      align='left'
      titleSize='h2'
      decorateTitle
    />
  )
}
