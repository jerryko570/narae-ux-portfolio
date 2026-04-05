import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import { smols } from '@/data/projects'
import Section from '@/components/ui/Section'
import Image from 'next/image'

export default function SmolsRetrospectiveSection() {
  return (
    <Section className='relative min-h-auto bg-gray-900'>
      <SectionHeader
        {...smols.sections.retrospectiveSection}
        className='text-white'
      />
      <div className='absolute right-30 bottom-0 w-[40%] overflow-hidden'>
        <Image
          src='/images/smols/mockups/character.svg'
          alt='retrospective'
          width={600}
          height={600}
          className=''
        />
      </div>
    </Section>
  )
}
