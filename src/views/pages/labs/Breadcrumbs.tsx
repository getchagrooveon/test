import type { FunctionComponent } from 'react'
import { ChevronLeft, User, Users } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface BreacrumbsProps {}

const Breacrumbs: FunctionComponent<BreacrumbsProps> = () => {
  const router = useRouter()
  return (
    <div className='flex'>
      <button onClick={() => router.back()} className='flex items-center bg-inherit'>
        <ChevronLeft size={24} />
      </button>
      <div className='flex gap-2'>
        <Link className='flex gap-1 items-center text-sm ml-4 primary-purple' href={'/students'}>
          <Users size={16} />
          Students
        </Link>
        /
        <div className='flex gap-1 items-center text-sm mr-2'>
          <User size={16} />
          Kristin Watson
        </div>
      </div>
    </div>
  )
}

export default Breacrumbs
