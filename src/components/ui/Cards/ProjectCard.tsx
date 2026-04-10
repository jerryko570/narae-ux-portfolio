import { VariantProps } from 'class-variance-authority'
import { CardVariant } from './Card.variants'
import { cn } from '@/lib/cn'
import Text from '@/components/ui/Text/Text'
import Link from 'next/link'

type ProjectCardProps = {
  title: string
  description: string
  showBadge?: boolean
  button?: { label: string; href: string }
  titleSlot?: React.ReactNode
  children?: React.ReactNode
  className?: string
} & VariantProps<typeof CardVariant>

export default function ProjectCard({
  title,
  description,
  theme,
  button,
  children,
  titleSlot,
  className,
  ...props
}: ProjectCardProps) {
  return (
    <Link
      href={button?.href ?? '#'}
      className={cn(
        CardVariant({ theme, ...props }),
        'transition-all duration-400 hover:-translate-y-3 hover:shadow-xl',
        className
      )}
    >
      <div className='flex w-full flex-col'>
        <div className='flex-1 whitespace-pre-line'>
          <div className='flex items-center gap-4'>
            <Text as='h3' className='font-bold'>
              {title}
            </Text>
            {titleSlot}
          </div>
          <Text as='body' className='pt-4'>
            {description}
          </Text>
          {children}
        </div>
        {button && (
          <div className='mt-16 flex h-15 w-full items-center justify-center rounded-full bg-white text-xl font-semibold text-gray-900'>
            {button.label}
          </div>
        )}
      </div>
    </Link>
  )
}
