import Text from '@/components/ui/Text/Text'
import Button from '@/components/ui/Button/Button'
import { smols } from '@/data/projects'

type ReviewHeaderProps = {
  onDownload: () => void
}

export default function ReviewHeader({ onDownload }: ReviewHeaderProps) {
  return (
    <div className='mb-16'>
      <div className='flex items-center justify-between'>
        <div>
          <Text as='h2'>{smols.reviewPageContent.title}</Text>
          <Text as='p' className='mt-4 text-gray-500'>
            {smols.reviewPageContent.description}
          </Text>
        </div>

        <Button
          variant='outline'
          label={smols.reviewPageContent.downloadLabel}
          size='lg'
          onClick={onDownload}
        />
      </div>
    </div>
  )
}
