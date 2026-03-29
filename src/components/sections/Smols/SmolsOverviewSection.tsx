import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import { smols } from '@/data/projects'

export default function SmolsOverviewSection() {
  return (
    <Section>
      <SectionHeader {...smols.sections.overview} />
    </Section>
  )
}
