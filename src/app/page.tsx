import FeatureCard from '@/components/ui/Cards/FeatureCard'
import { SmolsFeatureCardData } from '@/data/cards'

export default function Home() {
  return (
    <main className='px-8 py-10'>
      <section className='mx-auto rounded-xl bg-orange-50 py-5 md:px-10 md:py-10'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {SmolsFeatureCardData.map((card) => (
            <FeatureCard
              key={card.id}
              emoji={card.emoji}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
