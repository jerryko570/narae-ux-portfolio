import { VariantProps } from 'class-variance-authority'
import { CardVariant } from './Card.variants'
import { cn } from '@/lib/cn'
import Text from '../Text/Text'
import DonutChart from '../Charts/DonutChart'
import InsightList, { type InsightItem } from '../InsightList/InsightList'

type ChartInsightSectionProps = {
  title: string
  chartSrc: string
  insightTitle?: string
  insights: InsightItem[]
  className?: string
} & VariantProps<typeof CardVariant>

export default function ChartInsightSection({
  title,
  chartSrc,
  insightTitle,
  insights,
  theme,
  className,
}: ChartInsightSectionProps) {
  return (
    <div
      className={cn(
        'flex w-full flex-col gap-12',
        CardVariant({ theme }),
        className
      )}
    >
      <Text as='h6' className='font-regular'>
        {title}
      </Text>

      <div className='flex items-center justify-center gap-20'>
        <DonutChart src={chartSrc} size={280} />
        <InsightList title={insightTitle} items={insights} />
      </div>
    </div>
  )
}
