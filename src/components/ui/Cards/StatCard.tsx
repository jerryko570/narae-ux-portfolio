import { VariantProps } from 'class-variance-authority'
import { CardVariant } from './Card.variants'
import Text from '../Text/Text'
import { cn } from '@/lib/cn'

type StatItem = {
  value: string
  label: string
  goal: string
}

type StatCardProps = {
  description: string
  items: StatItem[]
  className?: string
} & VariantProps<typeof CardVariant>

export default function StatCard({
  description,
  items,
  theme,
  className,
}: StatCardProps) {
  return (
    <div className={cn(CardVariant({ theme }), className)}>
      <Text as='h4' className='text-center text-white'>
        {description}
      </Text>
      <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-1'>
        {items.map((item) => (
          <div key={item.label} className='text-center'>
            <Text as='h1' className='text-orange-500'>
              {item.value}
            </Text>
            <Text as='h5' className='text-medium mt-2 font-light'>
              {item.label}
            </Text>
            <Text as='p' className='mt-1 text-gray-400'>
              {item.goal}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}
