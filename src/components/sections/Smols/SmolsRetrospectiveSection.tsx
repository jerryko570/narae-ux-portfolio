import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import { smols } from '@/data/projects'
import Section from '@/components/ui/Section'
import Image from 'next/image'
import Button from '@/components/ui/Button/Button'
import FadeIn from '@/components/ui/FadeIn'
import Link from 'next/link'

export default function SmolsRetrospectiveSection() {
  const { actions } = smols.closing

  return (
    <Section className='relative min-h-auto bg-gray-900' noTopPadding>
      <FadeIn>
        <SectionHeader
          titleSize='h4'
          {...smols.sections.retrospectiveSection}
          className='text-white'
        />
      </FadeIn>

      <div className='absolute right-40 bottom-0 w-[40%] overflow-hidden'>
        <FadeIn delay={0.1}>
          <Image
            src='/images/smols/mockups/character.svg'
            alt='retrospective'
            width={600}
            height={600}
          />
        </FadeIn>
      </div>

      <div className='relative z-10 flex items-center gap-4 pt-12'>
        <FadeIn delay={0.2}>
          <Link href={actions.primary.href}>
            <Button
              label={actions.primary.label}
              size='lg'
              variant='secondary'
            />
          </Link>
        </FadeIn>
        <FadeIn delay={0.35}>
          <Link
            href={actions.secondary.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button label={actions.secondary.label} size='lg' variant='white' />
          </Link>
        </FadeIn>
      </div>
    </Section>
  )
}
