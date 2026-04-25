import UxPrincipleLayout from '@/components/common/UxPrincipleLayout'
import { smols } from '@/data/projects'
import Section from '@/components/ui/Section'

export default function SmolsFeedSection() {
  return (
    <Section className='bg-gray-100'>
      <UxPrincipleLayout
        uxPrinciple={smols.uxPrinciples[0]}
        showSectionHeader
      />
    </Section>
  )
}
