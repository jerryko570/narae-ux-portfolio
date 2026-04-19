import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import { smols } from '@/data/projects'
import Section from '@/components/ui/Section'
import Image from 'next/image'
import Button from '@/components/ui/Button/Button'

export default function SmolsRetrospectiveSection() {
  return (
    <Section className='relative min-h-auto bg-white'>
      <SectionHeader
        {...smols.sections.retrospectiveSection}
        className='text-gray-900'
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

      <div className='flex items-center gap-4 pt-8'>
        <Button label='Figma 원본 보기' size='md' variant='primary' />
        <Button label='큐리 케이스 보기 →' size='md' variant='outline' />
      </div>
    </Section>
  )
}
