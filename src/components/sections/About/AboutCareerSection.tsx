import Section from '@/components/ui/Section'
import Text from '@/components/ui/Text/Text'
import Badge from '@/components/ui/Badge/Badge'
import FadeIn from '@/components/ui/FadeIn'
import { aboutCareer, techStack } from '@/data/projects/about'
import AboutGitHubSection from './AboutGitHubSection'

const eraGapClassMap = {
  sm: 'gap-16',
  md: 'gap-[65px]',
  lg: 'gap-[92px]',
  xl: 'gap-24',
} as const

export default function AboutCareerSection() {
  return (
    <Section className='-mt-8 bg-blue-200'>
      <div className='grid grid-cols-2 gap-20'>
        {/* 왼쪽 — Career */}
        <div>
          <FadeIn>
            <div className='mb-4 flex items-center gap-3'>
              <Text as='h4' className='font-bold'>
                {aboutCareer.title}
              </Text>
              <Badge
                label='🤖 어떤 경력이 궁금하세요?'
                theme='dark'
                size='sm'
                animation='float'
              />
            </div>
            <Text as='p' className='mb-10 text-gray-900'>
              {aboutCareer.description}
            </Text>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className='mb-14'>
              <Text as='body' className='mb-4 font-extralight text-gray-900'>
                Education
              </Text>
              <ul className='flex flex-col gap-4'>
                {aboutCareer.education.map((item) => (
                  <li
                    key={item.year}
                    className='grid grid-cols-[80px_1fr] gap-16'
                  >
                    <Text as='caption' className='font-medium text-gray-900'>
                      {item.year}
                    </Text>
                    <Text as='caption' className='text-gray-500'>
                      {item.title}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <Text as='body' className='-mb-4 font-extralight text-gray-900'>
                Experience
              </Text>
              <ul className='flex flex-col gap-4'>
                {aboutCareer.experience.map((entry, i) =>
                  entry.kind === 'era' ? (
                    <li
                      key={`era-${i}`}
                      className={`mt-8 flex items-center ${
                        eraGapClassMap[entry.gap ?? 'md']
                      }`}
                    >
                      <Badge
                        label={entry.period}
                        theme={entry.theme}
                        size='xs'
                        weight='medium'
                        radius='md'
                      />
                      <Text as='p' className='font-bold text-gray-900'>
                        {entry.label}
                      </Text>
                    </li>
                  ) : (
                    <li
                      key={`${entry.year}-${i}`}
                      className='grid grid-cols-[80px_1fr] gap-16'
                    >
                      <Text as='caption' className='font-medium text-gray-900'>
                        {entry.year}
                      </Text>
                      <Text as='caption' className='text-gray-500'>
                        {entry.company && (
                          <span className='font-medium text-gray-900'>
                            {entry.company},{' '}
                          </span>
                        )}
                        {entry.description}
                      </Text>
                    </li>
                  )
                )}
              </ul>

              <div className='mt-10 rounded-2xl bg-white p-6 text-center'>
                <Text as='caption' className='font-bold text-blue-500'>
                  {aboutCareer.closing}
                </Text>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 오른쪽 — 기술 스택 */}
        <div className='pl-20'>
          <FadeIn delay={0.3}>
            <div className='flex items-center gap-4'>
              <Text as='h4' className='mb-4 font-bold'>
                {techStack.title}
              </Text>
              <Badge
                label='🤖 어떤 기술을 쓰는지 궁금하세요?'
                theme='dark'
                size='sm'
                animation='float'
              />
            </div>
            <Text as='p' className='mb-10 text-gray-900'>
              {techStack.description}
            </Text>
          </FadeIn>

          <div className='flex flex-col gap-14'>
            {techStack.categories.map((category, i) => (
              <FadeIn key={category.title} delay={0.4 + i * 0.15}>
                <div className='grid grid-cols-[100px_1fr] items-start gap-16'>
                  <Text as='body' className='font-extralight text-gray-900'>
                    {category.title}
                  </Text>
                  <div className='pt-2'>
                    <Text
                      as='caption'
                      className='mb-3 block font-normal text-gray-500'
                    >
                      {category.description}
                    </Text>
                    <div className='flex flex-wrap gap-2'>
                      {category.items.map((item) => (
                        <Badge
                          key={item.label}
                          label={item.label}
                          theme={item.theme}
                          size='xs'
                          weight='medium'
                          radius='md'
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.8}>
            <AboutGitHubSection />
          </FadeIn>
        </div>
      </div>
    </Section>
  )
}
