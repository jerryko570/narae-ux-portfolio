export default function ReviewSkeleton() {
  return (
    <div className='animate-pulse'>
      {/* 헤더 스켈레톤 */}
      <div className='mb-20 flex items-center justify-between'>
        <div>
          <div className='h-8 w-64 rounded-lg bg-gray-200' />
          <div className='mt-4 h-4 w-96 rounded bg-gray-200' />
        </div>
        <div className='h-10 w-36 rounded-lg bg-gray-200' />
      </div>

      {/* 필터 스켈레톤 */}
      <div className='mb-6 flex gap-2'>
        {[...Array(5)].map((_, i) => (
          <div key={i} className='h-8 w-24 rounded-full bg-gray-200' />
        ))}
      </div>

      {/* 리스트 스켈레톤 */}
      <div className='space-y-2'>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className='flex justify-between border-b border-gray-200 py-5'
          >
            <div className='h-4 w-[70%] rounded bg-gray-200' />
            <div className='h-6 w-20 rounded-full bg-gray-200' />
          </div>
        ))}
      </div>
    </div>
  )
}
