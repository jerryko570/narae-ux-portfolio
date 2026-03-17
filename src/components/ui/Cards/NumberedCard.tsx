import Badge from '../Badge/Badge'
import { VariantProps } from 'class-variance-authority'
import { CardVariant } from './Card.variants'
import { cn } from '@/lib/cn'

type NumberCardProps = {
  title: string
  description: string
} & VariantProps<typeof CardVariant>

export default function NumberedCard({
  title,
  description,
  ...props
}: NumberCardProps) {
  return (
    <div className={cn(CardVariant({ ...props }))}>
      <div>
        <Badge size='md' label='첫번째' className='bg-orange-500 text-white' />
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
