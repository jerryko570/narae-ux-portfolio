import Text from '../Text/Text'
import type { ComparisonPoint } from '@/data/types/smols'
import {
  ComparisonCardVariant,
  ComparisonCardHeader,
  ComparisonCardText,
  ComparisonCardHighlight,
  type ComparisonVariant,
} from './Card.variants'

type Props = {
  label: string
  points: ComparisonPoint[]
  variant?: ComparisonVariant
  className?: string
}

export default function ComparisonCard({
  label,
  points,
  variant = 'before',
  className,
}: Props) {
  return (
    <div className={ComparisonCardVariant({ variant, className })}>
      {/* 헤더 */}
      <div className={ComparisonCardHeader({ variant })}>{label}</div>

      {/* 본문 */}
      <div className='bg-white'>
        {points.map((point, i) => (
          <div
            key={i}
            className={`flex items-start px-6 py-4 ${
              i !== points.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <Text as='p' className={ComparisonCardText({ variant })}>
              {point.highlight && (
                <span className={ComparisonCardHighlight({ variant })}>
                  {point.highlight}
                </span>
              )}
              {point.text}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}
