import { Section } from '@/components/ui/section'
import { Career } from '@/components/career'

export default function CareerPage() {
  return (
    <div className='flex flex-col flex-1 w-full'>
      <Section id='career' className='pb-24 w-full'>
        <Career />
      </Section>
    </div>
  )
}
