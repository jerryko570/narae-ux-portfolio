import UxPrincipleLayout from '@/components/common/UxPrincipleLayout'
import { smols } from '@/data/projects'

export default function SmolsFeedSection() {
  return (
    <div className='bg-gray-100'>
      <UxPrincipleLayout
        uxPrinciple={smols.uxPrinciples[0]}
        theme='orange'
        sectionHeader={{
          badge: smols.sections.solution.badge ?? '',
          title: smols.sections.solution.title ?? '',
        }}
        beforePanelClassName='rounded-3xl bg-white px-8 py-8 ring-1 ring-gray-200'
        afterPanelClassName='rounded-3xl bg-orange-50 px-8 py-8 ring-1 ring-orange-100'
      />
    </div>
  )
}
