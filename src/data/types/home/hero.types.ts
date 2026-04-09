import type { CardTheme } from '@/components/ui/Cards/Card.variants'

export type HomeHeroData = {
  title: string
  cards: {
    title: string
    description: string
    button?: { label: string; href: string }
    theme: CardTheme
  }[]
}

export type ContactData = {
  email: string
  github: string
  blog: string
}
