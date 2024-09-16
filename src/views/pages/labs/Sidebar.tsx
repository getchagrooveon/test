import { ChevronRight, ClipboardList, FlaskConical, Lightbulb, MessageSquareMore, Monitor } from 'lucide-react'
import Link from 'next/link'
import type { FunctionComponent } from 'react'

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div className='col-span-2 '>
      <nav>
        <ul className='list-none'>
          <li className='px-4 py-2.5 text-sm nav-link rounded-lg'>
            <Link href={'/dashboard'} className='flex items-center justify-between'>
              <div className='flex gap-2'>
                <ClipboardList size={18} />
                Dashboard
              </div>
              <ChevronRight size={18} />
            </Link>
          </li>
          <li className='px-4 py-2.5 text-sm nav-link rounded-lg'>
            <Link href={'/lessons'} className='flex gap-2 items-center '>
              <FlaskConical size={18} />
              Lessons
            </Link>
          </li>
          <li className='px-4 py-2.5 text-sm nav-link rounded-lg'>
            <Link href={'/images-files'} className='flex gap-2 items-center '>
              <Monitor size={18} />
              Images & Files
            </Link>
          </li>
          <li className='px-4 py-2.5 text-sm nav-link rounded-lg'>
            <Link href={'/insights'} className='flex gap-2 items-center'>
              <Lightbulb size={18} />
              Insights
            </Link>
          </li>
          <li className='px-4 py-2.5 flex text-sm nav-link rounded-lg'>
            <Link href={'/chat'} className='flex gap-2 items-center w-full'>
              <MessageSquareMore size={18} />
              Chat
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
