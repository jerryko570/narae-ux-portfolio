// 개선과정: 꾸미기 영역

import UxPrincipleLayout from '@/components/common/UxPrincipleLayout'
import { smols } from '@/data/projects'

export default function SmolsStickerSection() {
  return (
    <div className='bg-gray-100'>
      <UxPrincipleLayout uxPrinciple={smols.uxPrinciples[2]} index={1} />
    </div>
  )
}
