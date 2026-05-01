'use client'

import { VariantProps } from 'class-variance-authority'
import { HeaderVariant } from './Header.variant'
import { cn } from '@/lib/cn'
import Link from 'next/link'
import Text from '../ui/Text/Text'
import Button from '../ui/Button/Button'
import Image from 'next/image'
import { useNavigation } from '@/context/navigation'
import { usePathname } from 'next/navigation'

type HeaderProps = VariantProps<typeof HeaderVariant>

const navLinks = [
  { href: '/smols', label: 'SMOLS', activeColor: 'text-orange-500' },
  { href: '/curi', label: 'CURI', activeColor: 'text-pink-500' },
]

export default function Header({ variant, sticky }: HeaderProps) {
  const { setIsChatOpen } = useNavigation()
  const pathname = usePathname()

  return (
    <header className={cn(HeaderVariant({ variant, sticky }))}>
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between px-16'>
        <Link href='/'>
          <Image
            src='/images/profile.png'
            alt='프로필 이미지'
            width={36}
            height={36}
            className='hover:opacity-80'
          />
        </Link>

        <div className='flex items-center gap-8'>
          <div className='flex items-center gap-8'>
            {navLinks.map(({ href, label, activeColor }) => (
              <Link key={href} href={href}>
                <Text
                  as='p'
                  className={cn(
                    'px-2 font-bold',
                    pathname === href
                      ? activeColor
                      : 'text-gray-900 hover:text-gray-400'
                  )}
                >
                  {label}
                </Text>
              </Link>
            ))}
          </div>

          <span className='text-gray-200'>|</span>

          <Link href='/about'>
            <Text
              as='p'
              className={cn(
                'mr-8 font-bold',
                pathname === '/about'
                  ? 'text-blue-500'
                  : 'text-gray-900 hover:text-gray-400'
              )}
            >
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
