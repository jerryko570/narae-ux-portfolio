// 개선과정: 기록하기 영역

import UxPrincipleLayout from '@/components/common/UxPrincipleLayout'
import { curi } from '@/data/projects'

export default function CuriReleasedSection() {
  return (
    <div className='bg-white pb-16'>
      <UxPrincipleLayout
        uxPrinciple={curi.uxPrinciples[2]}
        theme='pink'
        beforePanelClassName='rounded-3xl bg-white px-8 py-8 ring-1 ring-gray-200'
        afterPanelClassName='rounded-3xl bg-pink-50 px-8 py-8 ring-1 ring-pink-200'
        layout='single'
      />
    </div>
  )
}
