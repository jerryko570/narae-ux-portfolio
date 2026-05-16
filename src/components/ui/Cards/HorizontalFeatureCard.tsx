import { VariantProps } from 'class-variance-authority'
import { CardVariant } from './Card.variants'
import { cn } from '@/lib/cn'
import Text from '../Text/Text'

type HorizontalFeatureCardProps = {
  emoji: string
  title: string
  description: string
  className?: string
} & VariantProps<typeof CardVariant>

export default function HorizontalFeatureCard({
  emoji,
  title,
  description,
  className,
}: HorizontalFeatureCardProps) {
  return (
    <div className={cn('flex items-center gap-6', className)}>
      <Text as='h3'>{emoji}</Text>
      <div className='flex flex-col gap-1'>
        <Text as='body' className='font-medium whitespace-pre-line'>
          {title}
        </Text>
        <Text
          as='caption'
          className='font-regular pt-2 whitespace-pre-line opacity-60'
        >
          {description}
        </Text>
      </div>
    </div>
  )
}
