import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import UxPrincipleLayout from '@/components/common/UxPrincipleLayout'
import { smols } from '@/data/projects'

export default function SmolsSolutionSection() {
  return (
    <Section className='rounded-tl-[24rem] bg-orange-500'>
      <SectionHeader
        {...smols.sections.solution}
        className='whitespace-pre-line text-white'
        badgeTheme='white'
        align='center'
      />

      <UxPrincipleLayout
        transformation={smols.transformations[0]}
        uxPrinciple={smols.uxPrinciples[0]}
      />
    </Section>
  )
}
