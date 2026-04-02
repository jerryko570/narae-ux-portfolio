import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import UxPrincipleLayout from '@/components/common/UxPrincipleLayout'
import { smols } from '@/data/projects'
import { smolsSticker, smolsUxPrinciple } from '@/data/projects/smols'

export default function SmolsSolutionSection() {
  return (
    <Section className='bg-orange-500' inner='py-16'>
      <SectionHeader
        {...smols.sections.sticker}
        className='whitespace-pre-line text-white'
        badgeTheme='white'
        align='center'
      />
      <UxPrincipleLayout
        transformation={smolsSticker}
        uxPrinciple={smolsUxPrinciple}
      />
    </Section>
  )
}
