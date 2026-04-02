import { cn } from '@/lib/cn'

export default function Section({
  children,
  className,
  inner,
}: {
  children: React.ReactNode
  className?: string
  inner?: string
}) {
  return (
    <section className={className}>
      <div className={cn('mx-auto max-w-7xl px-16', inner ?? 'py-24')}>
        {children}
      </div>
    </section>
  )
}
