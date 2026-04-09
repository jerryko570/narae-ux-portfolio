import ProjectCard from '@/components/ui/Cards/ProjectCard'
import { HomeHeros } from '@/data/projects/home'
import TypingIndicator from '@/components/ui/Cards/TypingIndicator'

export default function HomeCardSection() {
  return (
    <div className='flex items-center gap-8 pt-24'>
      {HomeHeros.cards.map((card) => (
        <ProjectCard
          key={card.title}
          title={card.title}
          description={card.description}
          button={card.button}
          theme={card.theme}
          titleSlot={card.title === '나래봇' ? <TypingIndicator /> : undefined}
        />
      ))}
    </div>
  )
}
