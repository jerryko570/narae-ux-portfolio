import contactLinks from '@/data/projects/home/contact'
import Text from '@/components/ui/Text/Text'

export default function HomeContact() {
  return (
    <div className='mt-6 flex w-97 flex-col gap-6 border-l border-white/20 pl-8'>
      <Text as='h6' className='text-gray-900'>
        Contact
      </Text>

      <div className='flex flex-col gap-2'>
        {contactLinks.map((item) => (
          <div key={item.label} className='flex items-center gap-10'>
            <Text as='p' className='font-regular w-12 text-gray-900'>
              {item.label}
            </Text>
            <a
              href={item.href}
              target={item.label === 'email' ? undefined : '_blank'}
              rel={item.label === 'email' ? undefined : 'noopener noreferrer'}
              className='text-sm text-gray-500 transition-colors hover:text-gray-400'
            >
              {item.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
