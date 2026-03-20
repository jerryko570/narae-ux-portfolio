export default function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={className}>
      <div className='mx-auto max-w-7xl px-8 py-20 md:px-16 md:py-24 lg:py-32'>
        {children}
      </div>
    </section>
  )
}
