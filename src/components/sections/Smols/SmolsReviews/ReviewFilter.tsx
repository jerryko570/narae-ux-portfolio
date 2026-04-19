import Button from '@/components/ui/Button/Button'
import { smols } from '@/data/projects'

type ReviewFilterProps = {
  category: string
  onSelect: (c: string) => void
}

export default function ReviewFilter({
  category,
  onSelect,
}: ReviewFilterProps) {
  return (
    <div className='sticky top-0 z-10 mb-6 flex flex-wrap gap-4 py-8'>
      {smols.reviewCategories.map((c) => (
        <Button
          key={c}
          label={c}
          onClick={() => onSelect(c)}
          variant={category === c ? 'secondary' : 'white'}
          size='lg'
        />
      ))}
    </div>
  )
}
