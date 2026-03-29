'use client'

import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import Badge from '@/components/ui/Badge/Badge'
import Image from 'next/image'
import { smols } from '@/data/projects'
import { smolsTransformation, smolsUxPrinciple } from '@/data/projects/smols'

export default function SmolsSolutionSection() {
  return (
    <Section className='h-500 rounded-tl-[24rem] bg-orange-500'>
      <SectionHeader
        {...smols.sections.solution}
        className='whitespace-pre-line text-white'
        badgeTheme='white'
        align='center'
      />

      <div className='pt-16'>
        <div className='flex w-full items-center'>
          <Badge label={smolsTransformation.before.label} theme='dark' />
          <div className='h-px flex-2 bg-white' />
          <Badge label={smolsTransformation.center} theme='dark' />
          <div className='h-px flex-2 bg-white' />
          <Badge label={smolsTransformation.after.label} theme='dark' />
        </div>

        <div className='flex'>
          <div className='relative h-150 w-full'>
            <div className='absolute top-20 left-0 z-10 drop-shadow-xl'>
              <video
                autoPlay
                loop
                muted
                playsInline
                className='w-50 rounded-4xl'
              >
                <source
                  src={smolsUxPrinciple.video.before.src}
                  type='video/mp4'
                />
              </video>
            </div>
            <div className='absolute top-40 left-42 z-0'>
              <Image
                src={smolsUxPrinciple.asIsImage.src}
                alt=''
                width={smolsUxPrinciple.asIsImage.imageWidth}
                height={smolsUxPrinciple.asIsImage.imageHeight}
                className='w-50 rounded-2xl'
              />
            </div>
          </div>

          <div className='relative ml-auto flex h-150 w-full'>
            <div className='absolute top-20 left-34 z-0 drop-shadow-xl'>
              <video
                autoPlay
                loop
                muted
                playsInline
                className='w-50 rounded-4xl'
              >
                <source
                  src={smolsUxPrinciple.video.after.src}
                  type='video/mp4'
                />
              </video>
            </div>
            <div className='absolute top-18 right-0 z-10'>
              <Image
                src={smolsUxPrinciple.toBeImage.src}
                alt=''
                width={smolsUxPrinciple.toBeImage.imageWidth}
                height={smolsUxPrinciple.toBeImage.imageHeight}
                className='w-54 rounded-2xl'
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
