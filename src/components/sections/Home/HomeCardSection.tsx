import ProjectCard from '@/components/ui/Cards/ProjectCard'
import { HomeHeros } from '@/data/projects/home'
import TypingIndicator from '@/components/ui/Cards/TypingIndicator'
import FadeIn from '@/components/ui/FadeIn'

export default function HomeCardSection() {
  return (
    <div className='flex items-stretch justify-center gap-8 pt-24'>
      {HomeHeros.cards.map((card, i) => (
        <FadeIn key={card.title} delay={0.3 + i * 0.15}>
          <ProjectCard
            className='h-full w-75 shrink-0'
            title={card.title}
            description={card.description}
            button={card.button}
            theme={card.theme}
            titleSlot={
              card.title === '나래봇' ? <TypingIndicator /> : undefined
            }
          />
        </FadeIn>
      ))}
    </div>
  )
}
