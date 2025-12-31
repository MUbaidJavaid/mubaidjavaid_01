import dynamic from 'next/dynamic'

const AtomicSkillsNetwork = dynamic(() => import('./SkillsNetwork'), {
  ssr: false
})

export default function SkillsSection () {
  return (
    <div className='container mx-auto px-4 py-20'>
      <AtomicSkillsNetwork />
    </div>
  )
}
