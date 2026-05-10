import Badge from '../Badge/Badge'
import Text from '../Text/Text'
import type { VariantProps } from 'class-variance-authority'
import { BadgeVariants } from '../Badge/Badge.variants'
import { cn } from '@/lib/cn'

type SectionHeaderProps = {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  titleSize?: 'display' | 'h1' | 'h2' | 'h3' | 'h4'
  badgeTheme?: VariantProps<typeof BadgeVariants>['theme']
  decorateTitle?: boolean
  className?: string
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  description,
  align = 'center',
  titleSize = 'h2',
  badgeTheme = 'orange',
  decorateTitle = false,
  className,
}: SectionHeaderProps) {
  const textAlign =
    align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={cn('flex flex-col', textAlign, className)}>
      {badge && (
        <Badge label={badge} size='sm' theme={badgeTheme} className='mb-4' />
      )}
      {title && (
        <Text
          as={titleSize}
          className={cn(
            'break-keep whitespace-pre-line',
            decorateTitle && 'before:content-["{"] after:content-["}"]'
          )}
        >
          {title}
        </Text>
      )}
      {subtitle && (
        <Text as='h3' className='mt-6 break-keep whitespace-pre-line'>
          {subtitle}
        </Text>
      )}
      {description && (
        <Text as='p' className='mt-5 whitespace-pre-line'>
          {description}
        </Text>
      )}
    </div>
  )
}
