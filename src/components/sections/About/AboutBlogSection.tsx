import Section from '@/components/ui/Section'
import Text from '@/components/ui/Text/Text'
import Button from '@/components/ui/Button/Button'
import FadeIn from '@/components/ui/FadeIn'
import Link from 'next/link'
import Image from 'next/image'
import { aboutBlog } from '@/data/projects/about'
import { getBlogPosts } from '@/lib/getBlogPosts'

export default async function AboutBlogSection() {
  const posts = await getBlogPosts(2)

  return (
    <Section className='bg-blue-500'>
      <div className='flex items-center justify-between gap-16'>
        {/* 왼쪽 — 타이틀과 CTA */}
        <FadeIn>
          <div className='max-w-xl'>
            <Text as='h4' className='mb-4 font-bold text-white'>
              {aboutBlog.title}
            </Text>
            <Text as='p' className='mb-8 whitespace-pre-line text-white'>
              {aboutBlog.description}
            </Text>
            <div className='pt-4'>
              <Link
                href='https://jerryko570.github.io/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  variant='white'
                  label={aboutBlog.cta}
                  size='lg'
                  className='hover:bg-gray-200'
                />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* 오른쪽 — 블로그 카드 2개 가로 배치 */}
        <div className='grid w-140 grid-cols-2 gap-6'>
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={0.3 + i * 0.1}>
              <Link
                href={post.url}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1'
              >
                {/* 썸네일 — 정사각형 */}
                {post.thumbnail && (
                  <div className='relative h-30 w-full shrink-0 overflow-hidden bg-gray-900'>
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      sizes='240px'
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                  </div>
                )}

                {/* 텍스트 영역 */}
                <div className='flex flex-1 flex-col p-4'>
                  <Text
                    as='p'
                    className='line-clamp-3 block font-medium text-gray-900'
                  >
                    {post.title}
                  </Text>
                  <Text
                    as='caption'
                    className='block pt-2 font-light text-gray-400'
                  >
                    {post.categories[0] || post.tags[0] || 'Blog'} · {post.date}
                  </Text>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  )
}
