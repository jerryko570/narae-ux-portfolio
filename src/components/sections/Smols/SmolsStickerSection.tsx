import UxPrincipleLayout from '@/components/common/UxPrincipleLayout'
import { smols } from '@/data/projects'

export default function SmolsStickerSection() {
  return (
    <div className='bg-gray-100'>
      <UxPrincipleLayout
        transformation={smols.transformations[1]}
        uxPrinciple={smols.uxPrinciples[1]}
        index={1}
      />
    </div>
  )
}
