import { CardVariant } from './Card.variants'
import { VariantProps } from 'class-variance-authority'
import Text from '../Text/Text'
import { cn } from '@/lib/cn'

type FeatureCardProps = {
  title: string
  description: string | string[]
  value: string
  className?: string
} & VariantProps<typeof CardVariant>

export default function FeatureCard({
  title,
  description,
  value,
  theme,
  className,
}: FeatureCardProps) {
  const descriptions = Array.isArray(description) ? description : [description]

  return (
    <div
      className={cn(
        CardVariant({ theme }),
        'flex flex-col items-center text-center',
        className
      )}
    >
      <Text as='body' className='text-4xl font-bold text-orange-500'>
        {value}
      </Text>

      <Text as='body' className='mt-6 font-medium'>
        {title}
      </Text>

      <div className='mt-1'>
        {descriptions.map((desc, index) => (
          <Text as='p' key={index} className='pt-1 text-gray-400'>
            {desc}
          </Text>
        ))}
      </div>
    </div>
  )
}
