'use client'

import Section from '@/components/ui/Section'
import HeroSection from '@/components/sections/Hero/HeroSection'
import { smols } from '@/data/projects'
import type { MetricsSection, InsightSection } from '@/data/types'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import StatSection from '@/components/ui/Cards/StatSection'

import HighlightCard from '@/components/ui/Cards/HighlightCard'
import AppReviewSection from '@/components/ui/Cards/UserFeedbackSection'
import NumberedCard from '@/components/ui/Cards/NumberedCard'
import { smolsTransformation, smolsUxPrinciple } from '@/data/projects/smols'
import Image from 'next/image'
import Badge from '@/components/ui/Badge/Badge'

export default function Home() {
  const problemMetrics = smols.sections.problemMetrics as MetricsSection
  const userInsight = smols.sections.userInsight as InsightSection

  return (
    <div>
      {smols.heros.map((hero) => (
        <HeroSection key={hero.id} {...hero} />
      ))}

      <Section>
        <SectionHeader {...smols.sections.overview} />
      </Section>

      <Section className='bg-gray-900'>
        <SectionHeader
          {...problemMetrics}
          className='whitespace-pre-line text-white'
        />

        <StatSection
          {...problemMetrics.metrics}
          theme='dark'
          className='mt-12 whitespace-pre-line'
        />

        <div className='mt-32'>
          <SectionHeader
            {...userInsight}
            className='whitespace-pre-line text-white'
            align='center'
          />
        </div>

        <AppReviewSection
          className='mt-16'
          data={smols.feedbackData}
          theme='dark'
        />

        <HighlightCard
          className='mt-8'
          description={smols.insightSummary.description}
          theme='dark'
        />

        <SectionHeader
          {...smols.sections.strategy}
          className='pt-32 whitespace-pre-line text-white'
          align='center'
        />

        <div className='flex gap-8'>
          {smols.strategy.map((item) => (
            <HighlightCard
              key={item.title}
              className='mt-16'
              imageClassName='max-w-60'
              {...item}
              theme='dark'
            />
          ))}
        </div>
      </Section>

      <div className='bg-white'>
        <Section>
          <div className='flex items-start justify-between'>
            <SectionHeader
              {...smols.sections.uxStrategy}
              className='whitespace-pre-line text-black'
              align='left'
            />
          </div>

          <div className='flex gap-8 pt-16'>
            {smols.uxStrategy.items.map((item) => (
              <NumberedCard
                key={item.number}
                number={item.number}
                title={item.title}
                description={item.description}
                theme='lightOrange'
              />
            ))}
          </div>
        </Section>
      </div>

      <div className='h-500 rounded-tl-[24rem] bg-orange-500 pt-32'>
        <SectionHeader
          {...smols.sections.solution}
          className='whitespace-pre-line text-white'
          badgeTheme='white'
          align='center'
        />
        <Section>
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
        </Section>
      </div>
    </div>
  )
}
