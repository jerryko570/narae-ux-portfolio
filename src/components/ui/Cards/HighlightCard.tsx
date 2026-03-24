import { CardVariant } from './Card.variants'
import { VariantProps } from 'class-variance-authority'
import Text from '../Text/Text'
import { cn } from '@/lib/cn'

type HightlightCardProps = {
  description: string
  className: string
} & VariantProps<typeof CardVariant>

export default function HighlightCard({
  description,
  theme,
  className,
}: HightlightCardProps) {
  return (
    <div className={cn(CardVariant({ theme }), className)}>
      <Text as='h6'>{description}</Text>
    </div>
  )
}
