export default function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={className}>
      <div className='mx-auto max-w-7xl px-16 py-24'>{children}</div>
    </section>
  )
}
