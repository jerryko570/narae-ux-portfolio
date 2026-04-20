import Section from '@/components/ui/Section'
import Text from '@/components/ui/Text/Text'
import Button from '@/components/ui/Button/Button'
import FadeIn from '@/components/ui/FadeIn'
import { aboutBot } from '@/data/projects/about'

export default function AboutBotSection() {
  return (
    <Section className='bg-gray-900'>
      <div className='flex items-center justify-between gap-16'>
        {/* 왼쪽 */}
        <FadeIn>
          <div className='max-w-xl'>
            <Text as='h4' className='mb-4 font-bold text-white'>
              {aboutBot.title}
            </Text>
            <Text as='p' className='mb-8 whitespace-pre-line text-white'>
              {aboutBot.description}
            </Text>
            <div className='pt-4'>
              <Button
                variant='white'
                label={aboutBot.cta}
                size='lg'
                className='hover:bg-gray-200'
              />
            </div>
          </div>
        </FadeIn>

        {/* 오른쪽 — 구현 스택 */}
        <div className='grid w-114 grid-cols-2 gap-4'>
          {aboutBot.features.map((f, i) => (
            <FadeIn key={f.label} delay={0.2 + i * 0.1}>
              <div className='rounded-xl bg-gray-800 p-4 hover:bg-gray-700'>
                <Text as='body' className='mb-1 block font-medium text-white'>
                  {f.label}
                </Text>
                <Text
                  as='caption'
                  className='whitespace-pre-line text-gray-500'
                >
                  {f.desc}
                </Text>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  )
}
