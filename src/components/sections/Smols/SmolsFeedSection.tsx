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
      />
    </div>
  )
}
