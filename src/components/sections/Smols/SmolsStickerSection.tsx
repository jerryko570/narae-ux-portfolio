// 개선과정: 기록하기 영역

import UxPrincipleLayout from '@/components/common/UxPrincipleLayout'
import { smols } from '@/data/projects'

export default function SmolsSolutionSection() {
  return (
    <div className='bg-gray-100 pt-16 pb-16'>
      <UxPrincipleLayout
        uxPrinciple={smols.uxPrinciples[2]}
        beforePanelClassName='rounded-3xl bg-white px-8 py-8 ring-1 ring-gray-200'
        afterPanelClassName='rounded-3xl bg-orange-50 px-8 py-8 ring-1 ring-orange-100'
      />
    </div>
  )
}
