import { CardVariant } from './Card.variants'
import { VariantProps } from 'class-variance-authority'
import Text from '../Text/Text'
import { cn } from '@/lib/cn'

type FeatureCardProps = {
  title: string
  description: string | string[]
  emoji: string
} & VariantProps<typeof CardVariant>

const emojiStyle =
  'flex h-24 w-24 items-center justify-center rounded-full border border-orange-100 bg-white text-center text-5xl mx-auto'

export default function FeatureCard({
  title,
  description,
  emoji,
  theme,
}: FeatureCardProps) {
  const descriptions = Array.isArray(description) ? description : [description]

  return (
    <div
      className={cn(
        CardVariant({ theme }),
        'flex flex-col items-center text-center'
      )}
    >
      <span className={cn(emojiStyle, 'text-2xl font-bold text-orange-500')}>
        {emoji}
      </span>
      <Text as='h6' className='mt-5 font-bold'>
        {title}
      </Text>
      <div className='mt-3'>
        {descriptions.map((desc, index) => (
          <Text as='p' key={index}>
            {desc}
          </Text>
        ))}
      </div>
    </div>
  )
}
