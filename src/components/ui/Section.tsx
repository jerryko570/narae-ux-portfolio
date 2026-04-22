import { cn } from '@/lib/cn'

export default function Section({
  children,
  className,
  inner,
  maxWidth = 'max-w-7xl',
  noTopPadding = false,
}: {
  children: React.ReactNode
  className?: string
  inner?: string
  maxWidth?: string
  noTopPadding?: boolean
}) {
  return (
    <section className={className}>
      <div
        className={cn(
          `mx-auto ${maxWidth} px-16`,
          !inner && (noTopPadding ? 'pb-24' : 'py-24')
        )}
        style={
          inner
            ? {
                paddingTop: noTopPadding ? 0 : `${inner}px`,
                paddingBottom: `${inner}px`,
              }
            : undefined
        }
      >
        {children}
      </div>
    </section>
  )
}
