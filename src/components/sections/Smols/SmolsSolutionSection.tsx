'use client'

import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import Badge from '@/components/ui/Badge/Badge'
import Image from 'next/image'
import { smols } from '@/data/projects'
import { smolsTransformation, smolsUxPrinciple } from '@/data/projects/smols'
import Text from '@/components/ui/Text/Text'

export default function SmolsSolutionSection() {
  return (
    <Section className='rounded-tl-[24rem] bg-orange-500'>
      <SectionHeader
        {...smols.sections.solution}
        className='whitespace-pre-line text-white'
        badgeTheme='white'
        align='center'
      />

      <div className='pt-16'>
        {/* 뱃지 + 라인 */}
        <div className='relative flex items-center'>
          <div className='absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white' />
          <div className='z-10 w-[45%]'>
            <Badge
              label={smolsTransformation.before.label}
              theme='darkOrange'
            />
          </div>
          <div className='z-10 w-[30%]'>
            <Badge label={smolsTransformation.center} theme='darkOrange' />
          </div>
          <div className='z-10 w-[40%]'>
            <Badge label={smolsTransformation.after.label} theme='darkOrange' />
          </div>
        </div>

        {/* 영상 + 이미지 */}
        <div className='flex items-start'>
          {/* AS-IS */}
          <div className='relative h-140 w-full'>
            <video
              autoPlay
              loop
              muted
              playsInline
              className='absolute top-12 left-0 z-10 w-50 rounded-4xl drop-shadow-2xl'
            >
              <source
                src={smolsUxPrinciple.video.before.src}
                type='video/mp4'
              />
            </video>

            <Image
              src={smolsUxPrinciple.asIsImage.src}
              alt='AS-IS 프로토타입'
              width={smolsUxPrinciple.asIsImage.imageWidth}
              height={smolsUxPrinciple.asIsImage.imageHeight}
              className='absolute top-28 left-44 z-0 w-50 rounded-2xl'
            />
          </div>

          {/* 포스트잇 */}
          <div className='relative mt-18 w-50 text-center'>
            {/* 첫번째 */}
            <div className='absolute -right-8 w-50 rounded-md bg-yellow-200 p-12 shadow-md'>
              <Text
                as='h6'
                className='font-bold whitespace-pre-line text-gray-900'
              >
                {smolsTransformation.insights[0].text}
              </Text>
            </div>
          </div>

          {/* TO-BE */}
          <div className='relative w-full'>
            <video
              autoPlay
              loop
              muted
              playsInline
              className='absolute top-18 left-30 z-10 w-50 rounded-4xl drop-shadow-xl'
            >
              <source src={smolsUxPrinciple.video.after.src} type='video/mp4' />
            </video>

            <Image
              src={smolsUxPrinciple.toBeImage.src}
              alt='TO-BE 프로토타입'
              width={smolsUxPrinciple.toBeImage.imageWidth}
              height={smolsUxPrinciple.toBeImage.imageHeight}
              className='absolute top-8 -right-2 z-0 w-50 rounded-2xl'
            />
          </div>
        </div>
        {/* 텍스트 */}
        <div className='flex justify-center'>
          <div className='w-[40%]'>
            <Text as='h6' className='font-bold whitespace-pre-line text-white'>
              {smolsTransformation.before.title}
            </Text>
            <Text as='p' className='pt-4 whitespace-pre-line text-white'>
              {smolsTransformation.before.description}
            </Text>
          </div>
          <div className='w-[30%]' />
          <div className='w-[40%]'>
            <Text as='h6' className='font-bold whitespace-pre-line text-white'>
              {smolsTransformation.after.title}
            </Text>
            <Text as='p' className='pt-4 whitespace-pre-line text-white'>
              {smolsTransformation.after.description}
            </Text>
          </div>
        </div>
      </div>
    </Section>
  )
}
