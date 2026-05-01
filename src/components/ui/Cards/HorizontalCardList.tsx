import { VariantProps } from 'class-variance-authority'
import { CardVariant } from './Card.variants'
import { cn } from '@/lib/cn'
import HorizontalFeatureCard from './HorizontalFeatureCard'

type CardItem = {
  emoji: string
  title: string
  description: string
}

type HorizontalCardListProps = {
  items: CardItem[]
  className?: string
} & VariantProps<typeof CardVariant>

export default function HorizontalCardList({
  items,
  theme,
  className,
}: HorizontalCardListProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        CardVariant({ theme }),
        className
      )}
    >
      <div className='flex items-center gap-24'>
        {items.map((item) => (
          <HorizontalFeatureCard
            key={item.title}
            emoji={item.emoji}
            title={item.title}
            description={item.description}
            theme={theme}
          />
        ))}
      </div>
    </div>
  )
}
