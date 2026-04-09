import Badge from '../Badge/Badge'
import { VariantProps } from 'class-variance-authority'
import { CardVariant } from './Card.variants'
import { cn } from '@/lib/cn'
import Text from '@/components/ui/Text/Text'

type NumberCardProps = {
  title: string
  description: string
  number?: number
  showBadge?: boolean
  button?: { label: string; href: string }
} & VariantProps<typeof CardVariant>

export default function NumberCard({
  title,
  description,
  theme,
  number,
  ...props
}: NumberCardProps) {
  return (
    <div className={cn(CardVariant({ theme, ...props }))}>
      <div>
        {number && <Badge size='sm' label={String(number)} theme='orange' />}
        <div className='pt-2 whitespace-pre-line'>
          <Text as='h6' className='font-bold'>
            {title}
          </Text>
          <Text as='p' className='pt-4'>
            {description}
          </Text>
        </div>
      </div>
    </div>
  )
}
