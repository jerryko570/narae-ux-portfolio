'use client'

import Badge from '@/components/ui/Badge/Badge'
import Image from 'next/image'
import Text from '@/components/ui/Text/Text'
import type { Transformation, UxPrincipleType } from '@/data/types'

type Props = {
  transformation: Transformation
  uxPrinciple: UxPrincipleType
}

export default function UxPrincipleLayout({
  transformation,
  uxPrinciple,
}: Props) {
  return (
    <div className='pt-16'>
      {/* 뱃지 + 라인 */}
      <div className='relative flex items-center'>
        <div className='absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white' />
        <div className='z-10 w-[45%]'>
          <Badge label={transformation.before.label} theme='darkOrange' />
        </div>
        <div className='z-10 w-[30%]'>
          <Badge label={transformation.center} theme='darkOrange' />
        </div>
        <div className='z-10 w-[40%]'>
          <Badge label={transformation.after.label} theme='darkOrange' />
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
            <source src={uxPrinciple.video.before.src} type='video/mp4' />
          </video>

          <Image
            src={uxPrinciple.asIsImage.src}
            alt='AS-IS 프로토타입'
            width={uxPrinciple.asIsImage.imageWidth}
            height={uxPrinciple.asIsImage.imageHeight}
            className='absolute top-28 left-44 z-0 w-50 rounded-2xl'
          />
        </div>

        {/* 포스트잇 */}
        <div className='relative mt-18 w-50 text-center'>
          {/* 첫번째 */}
          <div className='absolute -right-12 w-56 rounded-md bg-yellow-200 p-12 shadow-md'>
            <Text
              as='h6'
              className='font-bold whitespace-pre-line text-gray-900'
            >
              {transformation.insights[0].text}
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
            <source src={uxPrinciple.video.after.src} type='video/mp4' />
          </video>

          <Image
            src={uxPrinciple.toBeImage.src}
            alt='TO-BE 프로토타입'
            width={uxPrinciple.toBeImage.imageWidth}
            height={uxPrinciple.toBeImage.imageHeight}
            className='absolute top-8 -right-2 z-0 w-50 rounded-2xl'
          />
        </div>
      </div>
      {/* 텍스트 */}
      <div className='flex justify-center'>
        <div className='w-[40%]'>
          <Text as='h6' className='font-bold whitespace-pre-line text-white'>
            {transformation.before.title}
          </Text>
          <Text as='p' className='pt-4 whitespace-pre-line text-white'>
            {transformation.before.description}
          </Text>
        </div>
        <div className='w-[30%]' />
        <div className='w-[40%]'>
          <Text as='h6' className='font-bold whitespace-pre-line text-white'>
            {transformation.after.title}
          </Text>
          <Text as='p' className='pt-4 whitespace-pre-line text-white'>
            {transformation.after.description}
          </Text>
        </div>
      </div>
    </div>
  )
}
