import Button from '@/components/ui/Button/Button'
import Text from '@/components/ui/Text/Text'
import { suggestedQuestions } from '@/data/projects/naraebot/suggestedQuestions'

interface Props {
  onSelect: (question: string) => void
}

export default function SuggestedQuestions({ onSelect }: Props) {
  return (
    <div className='mt-5 flex flex-wrap items-center gap-3'>
      <Text as='p' className='font-medium text-white'>
        추천질문
      </Text>
      {suggestedQuestions.map((question) => (
        <Button
          key={question}
          label={question}
          size='sm'
          variant='white'
          onClick={() => onSelect(question)}
          className='hover:bg-gray-200'
        />
      ))}
    </div>
  )
}
