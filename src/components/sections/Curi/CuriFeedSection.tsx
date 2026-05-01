// 개선 과정

import UxPrincipleLayout from '@/components/common/UxPrincipleLayout'
import { curi } from '@/data/projects'

export default function CuriFeedSection() {
  return (
    <div className='bg-white'>
      <UxPrincipleLayout
        uxPrinciple={curi.uxPrinciples[0]}
        theme='pink'
        sectionHeader={{
          badge: curi.sections.solution.badge ?? '',
          title: curi.sections.solution.title ?? '',
        }}
        beforePanelClassName='rounded-3xl bg-white px-8 py-8 ring-1 ring-gray-200'
        afterPanelClassName='rounded-3xl bg-pink-50 px-8 py-8 ring-1 ring-pink-200'
      />
    </div>
  )
}
