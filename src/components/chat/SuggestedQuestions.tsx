import Button from '@/components/ui/Button/Button'
import Text from '@/components/ui/Text/Text'
import { suggestedQuestions } from '@/data/projects/naraebot/suggestedQuestions'

interface Props {
  onSelect: (question: string) => void
}

export default function SuggestedQuestions({ onSelect }: Props) {
  return (
    <div className='mt-8 flex flex-wrap items-center gap-4'>
      <Text as='p' className='font-medium text-white'>
        이나래가 궁금하다면?
      </Text>
      {suggestedQuestions.map((question) => (
        <Button
          key={question}
          label={question}
          size='md'
          variant='outlineWhite'
          onClick={() => onSelect(question)}
        />
      ))}
    </div>
  )
}
