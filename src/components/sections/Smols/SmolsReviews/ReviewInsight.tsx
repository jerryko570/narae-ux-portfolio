import Text from '@/components/ui/Text/Text'
import { smols } from '@/data/projects'

export default function ReviewInsight() {
  return (
    <div className='mb-8 rounded-2xl bg-gray-900 p-12'>
      {/* 인사이트 문구 */}
      <div className='order-orange-500 mb-8'>
        <Text as='h5' className='text-white'>
          {smols.reviewInsight.title}
        </Text>
        <Text as='p' className='mt-1 text-gray-400'>
          {smols.reviewInsight.description}
        </Text>
      </div>

      {/* 숫자 카드 3개 */}
      <div className='grid grid-cols-3 gap-6'>
        {smols.reviewInsight.card.map((item) => (
          <div key={item.title} className='rounded-2xl bg-gray-800 p-6'>
            <Text as='h3' className='text-orange-500'>
              {item.title}
            </Text>
            <Text as='p' className='mt-1 text-gray-400'>
              {item.description}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}
