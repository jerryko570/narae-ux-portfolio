'use client' // ← 추가

import ProjectCard from '@/components/ui/Cards/ProjectCard'
import { HomeHeros } from '@/data/projects/home'
import TypingIndicator from '@/components/ui/Cards/TypingIndicator'
import FadeIn from '@/components/ui/FadeIn'
import { useNavigation } from '@/context/navigation' // ← 추가

export default function HomeCardSection() {
  const { setIsChatOpen } = useNavigation() // ← 추가

  return (
    <div className='flex items-stretch justify-center gap-8 pt-24'>
      {HomeHeros.cards.map((card, i) => {
        const isNaraebot = card.title === '나래봇'

        // 나래봇만 onClick으로, 나머지는 그대로 href
        const button = isNaraebot
          ? {
              label: card.button?.label ?? '직접 대화해보기',
              onClick: () => setIsChatOpen(true),
            }
          : card.button

        return (
          <FadeIn key={card.title} delay={0.3 + i * 0.15}>
            <ProjectCard
              className='h-full w-75 shrink-0'
              title={card.title}
              description={card.description}
              button={button}
              theme={card.theme}
              titleSlot={isNaraebot ? <TypingIndicator /> : undefined}
            />
          </FadeIn>
        )
      })}
    </div>
  )
}
