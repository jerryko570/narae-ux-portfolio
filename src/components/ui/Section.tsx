import { cn } from '@/lib/cn'

export default function Section({
  children,
  className,
  inner,
  maxWidth = 'max-w-7xl',
}: {
  children: React.ReactNode
  className?: string
  inner?: string
  maxWidth?: string
}) {
  return (
    <section className={className}>
      <div
        className={cn(`mx-auto ${maxWidth} px-16`, !inner && 'py-18')}
        style={
          inner
            ? { paddingTop: `${inner}px`, paddingBottom: `${inner}px` }
            : undefined
        }
      >
        {children}
      </div>
    </section>
  )
}
