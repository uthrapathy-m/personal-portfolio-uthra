import { Hero } from '@/components/hero'
import { Career } from '@/components/career'

export default function Home() {
  return (
    <main className='flex flex-col flex-1 w-full'>
      <Hero />
      <Career />
    </main>
  )
}
