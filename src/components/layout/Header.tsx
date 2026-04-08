'use client'

import { VariantProps } from 'class-variance-authority'
import { HeaderVariant } from './Header.variant'
import { cn } from '@/lib/cn'
import Link from 'next/link'
import Text from '../ui/Text/Text'
import Button from '../ui/Button/Button'
import Image from 'next/image'
import { useNavigation } from '@/context/navigation'

type HeaderProps = VariantProps<typeof HeaderVariant>

export default function Header({ variant, sticky }: HeaderProps) {
  const { setIsChatOpen } = useNavigation()

  return (
    <header className={cn(HeaderVariant({ variant, sticky }))}>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between px-16'>
        <div>
          <Link href='/'>
            <Image
              src='/images/profile.png'
              alt='프로필 이미지'
              width={36}
              height={36}
              className='hover hover:opacity-80'
            />
          </Link>
        </div>

        <div className='flex items-center gap-8'>
          <Link href='/smols'>
            <Text as='p' className='hover:text-gray-500'>
              PROJECT
            </Text>
          </Link>
          <Link href='/about'>
            <Text as='p' className='hover:text-gray-500'>
              ABOUT
            </Text>
          </Link>
          <Button
            size='lg'
            variant='secondary'
            label='🤖 나래봇'
            onClick={() => setIsChatOpen(true)}
          />
        </div>
      </div>
    </header>
  )
}
