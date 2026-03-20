import React from 'react'
import { VariantProps } from 'class-variance-authority'
import { textVariant } from './Text.variants'
import { cn } from '@/lib/cn'

type AsType = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'

type textProps = {
  children: React.ReactNode
  className?: string
  as?: AsType
} & Omit<VariantProps<typeof textVariant>, 'as'> &
  React.HTMLAttributes<HTMLElement>

const elementMap: Record<AsType, React.ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  p: 'p',
  span: 'span',
}

export default function Text({
  as = 'p',
  children,
  className,
  ...rest
}: textProps) {
  const Tag = elementMap[as]

  return (
    <Tag className={cn(textVariant({ as }), className)} {...rest}>
      {children}
    </Tag>
  )
}
