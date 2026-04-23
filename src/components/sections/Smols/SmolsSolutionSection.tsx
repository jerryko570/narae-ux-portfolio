import UxPrincipleLayout from '@/components/common/UxPrincipleLayout'
import { smols } from '@/data/projects'

export default function SmolsSolutionSection() {
  return (
    <div className='bg-gray-100'>
      <UxPrincipleLayout
        transformation={smols.transformations[0]}
        uxPrinciple={smols.uxPrinciples[0]}
        index={0}
        showSectionHeader
      />
    </div>
  )
}
