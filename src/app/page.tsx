import Text from '@/components/ui/Text/Text'
export default function Home() {
  return (
    <main className='lex items-center gap-3 pl-30 pt-30 space-y-6'>
      <Text as='h1'>h1 사이즈입니다.</Text>
      <Text as='h2'>h2 사이즈입니다.</Text>
      <Text as='h3'>h3 사이즈입니다.</Text>
      <Text as='h4'>h4 사이즈입니다.</Text>
      <Text as='h5'>h5 사이즈입니다.</Text>
      <Text as='p'>p 사이즈입니다.</Text>
      <Text as='span'>span 사이즈입니다.</Text>
    </main>
  )
}
