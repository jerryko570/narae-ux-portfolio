import UxPrincipleLayout from '@/components/common/UxPrincipleLayout'
import { curi } from '@/data/projects'

export default function SmolsFeedSection() {
  return (
    <div className='bg-gray-100'>
      <UxPrincipleLayout uxPrinciple={curi.uxPrinciples[2]} />
    </div>
  )
}
