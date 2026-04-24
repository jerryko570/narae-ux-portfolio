// SmolsFeedSection.tsx (새 파일)

import UxPrincipleLayout from '@/components/common/UxPrincipleLayout'
import { smols } from '@/data/projects'

export default function SmolsFeedSection() {
  return (
    <div className='bg-gray-100'>
      <UxPrincipleLayout
        transformation={smols.transformations[2]}
        uxPrinciple={smols.uxPrinciples[2]}
      />
    </div>
  )
}
