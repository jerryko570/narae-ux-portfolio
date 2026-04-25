// 개선과정: 기록하기 영역

import UxPrincipleLayout from '@/components/common/UxPrincipleLayout'
import { smols } from '@/data/projects'

export default function SmolsSolutionSection() {
  return (
    <div className='bg-gray-100'>
      <UxPrincipleLayout uxPrinciple={smols.uxPrinciples[1]} />
    </div>
  )
}
