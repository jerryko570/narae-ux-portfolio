import Badge, { type BadgeProps } from '../Badge/Badge'
import { VariantProps } from 'class-variance-authority'
import { CardVariant } from './Card.variants'
import { cn } from '@/lib/cn'
import Text from '@/components/ui/Text/Text'

type NumberCardProps = {
  title: string
  description: string
  number: string
  showBadge?: boolean
  badgeTheme?: BadgeProps['theme']
  badgeSize?: BadgeProps['size']
  badgeRadius?: BadgeProps['radius']
  badgeWeight?: BadgeProps['weight']
  className?: string
} & VariantProps<typeof CardVariant>

export default function NumberCard({
  title,
  description,
  theme,
  number,
  showBadge = true,
  badgeTheme = 'orange',
  badgeSize = 'xs',
  badgeRadius,
  badgeWeight = 'bold',
  className,
  ...props
}: NumberCardProps) {
  return (
    <div className={cn(CardVariant({ theme, className, ...props }))}>
      <div>
        {showBadge && (
          <Badge
            size={badgeSize}
            label={String(number)}
            theme={badgeTheme}
            radius={badgeRadius}
            weight={badgeWeight}
          />
        )}
        <div className='pt-3 whitespace-pre-line'>
          <Text as='body' className='font-medium'>
            {title}
          </Text>
          <Text as='p' className='font-regular pt-3 text-gray-500'>
            {description}
          </Text>
        </div>
      </div>
    </div>
  )
}
