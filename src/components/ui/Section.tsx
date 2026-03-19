export default function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={className}>
      <div className='mx-auto max-w-7xl px-8 py-11 md:px-14 md:py-12 lg:py-18'>
        {children}
      </div>
    </section>
  )
}
