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
  subdescription?: string
  align?: 'left' | 'center'
  titleSize?: 'display' | 'h1' | 'h2' | 'h3' | 'h4'
  badgeTheme?: VariantProps<typeof BadgeVariants>['theme']
  className?: string
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  description,
  subdescription,
  align = 'center',
  titleSize = 'h1',
  badgeTheme = 'orange',
  className,
}: SectionHeaderProps) {
  const textAlign =
    align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={cn('flex flex-col', textAlign, className)}>
      {badge && <Badge label={badge} size='md' theme={badgeTheme} />}
      {title && (
        <Text as={titleSize} className='mt-8 break-keep whitespace-pre-line'>
          {title}
        </Text>
      )}
      {subtitle && (
        <Text as='h4' className='mt-6 break-keep whitespace-pre-line'>
          {subtitle}
        </Text>
      )}
      {description && (
        <Text as='p' className='mt-8 whitespace-pre-line'>
          {description}
        </Text>
      )}
      {subdescription && (
        <Text as='p' className='mt-4 whitespace-pre-line'>
          {subdescription}
        </Text>
      )}
    </div>
  )
}
