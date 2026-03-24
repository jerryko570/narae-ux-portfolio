'use client'

import { useEffect, useRef, useState } from 'react'
import { VariantProps } from 'class-variance-authority'
import { CardVariant } from './Card.variants'
import Text from '../Text/Text'
import { cn } from '@/lib/cn'
import { useCountUp, parseValue } from '@/hooks/useCountUp'

type StatItem = {
  value: string
  label: string
  goal: string
}

type StatCardProps = {
  description: string
  items: StatItem[]
  className?: string
} & VariantProps<typeof CardVariant>

function AnimatedStatItem({
  value,
  label,
  goal,
  started,
}: StatItem & { started: boolean }) {
  const { num, suffix } = parseValue(value)
  const count = useCountUp(num, started)

  return (
    <div className='text-center'>
      <Text as='display' className='text-orange-500'>
        {count}
        {suffix}
      </Text>
      <Text as='h6' className='mt-4 font-light'>
        {label}
      </Text>
      <Text as='p' className='mt-2 text-gray-400'>
        {goal}
      </Text>
    </div>
  )
}

export default function StatCardAnimated({
  description,
  items,
  theme,
  className,
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={cn(CardVariant({ theme }), className)}>
      <Text as='h6' className='text-center text-white'>
        {description}
      </Text>
      <div className='mt-16 grid grid-cols-3 gap-8'>
        {items.map((item) => (
          <AnimatedStatItem key={item.label} {...item} started={started} />
        ))}
      </div>
    </div>
  )
}
