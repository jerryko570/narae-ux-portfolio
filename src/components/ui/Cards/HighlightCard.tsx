import { CardVariant } from './Card.variants'
import { VariantProps } from 'class-variance-authority'
import Text from '../Text/Text'
import { cn } from '@/lib/cn'
import Image from 'next/image'
type HighlightCardProps = {
  title?: string
  description?: string
  image?: string
  imageWidth?: number
  imageHeight?: number
  className?: string
  gap?: string
} & VariantProps<typeof CardVariant>

export default function HighlightCard({
  title,
  description,
  image,
  theme,
  imageWidth = 400,
  imageHeight = 500,
  className,
  gap = 'mt-2',
}: Partial<HighlightCardProps>) {
  return (
    <div className={cn(CardVariant({ theme }), className, 'block')}>
      {title && (
        <Text as='p' className='text-center font-bold text-orange-500'>
          {title}
        </Text>
      )}
      {description && (
        <Text as='h6' className={cn('text-center', title && gap)}>
          {description}
        </Text>
      )}
      {image && (
        <Image
          src={image}
          alt={title ?? ''}
          width={imageWidth}
          height={imageHeight}
          className='mx-auto max-w-75 pt-4'
        />
      )}
    </div>
  )
}
