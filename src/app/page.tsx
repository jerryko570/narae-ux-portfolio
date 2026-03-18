import NumberedCard from '@/components/ui/Cards/NumberedCard'
import { SmolsNumberCardData } from '@/data/cards'
export default function Home() {
  return (
    <main className='grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-5 lg:grid-cols-3 lg:gap-10'>
      {SmolsNumberCardData.map((card, index) => (
        <NumberedCard
          key={index}
          number={index + 1}
          title={card.title}
          description={card.description}
          theme='dark'
        />
      ))}
    </main>
  )
}
