import { HomeContact } from '@/data/projects/home'

export default function HomeContactSection() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-8'>
        <span className='font-bold'>Email</span>
        <a href={`mailto:${HomeContact.email}`}>{HomeContact.email}</a>
      </div>
      <div className='flex gap-8'>
        <span className='font-bold'>GitHub</span>
        <a href={HomeContact.github} target='_blank' rel='noopener noreferrer'>
          {HomeContact.github}
        </a>
      </div>
      <div className='flex gap-8'>
        <span className='font-bold'>Blog</span>
        <a href={HomeContact.blog} target='_blank'>
          {HomeContact.blog}
        </a>
      </div>
    </div>
  )
}
