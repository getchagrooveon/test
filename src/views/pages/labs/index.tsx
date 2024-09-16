'use client'

import type { Lab } from '@/types/apps/labsTypes'
import Breacrumbs from './Breadcrumbs'
import StudentInfo from './StudentInfo'
import Sidebar from './Sidebar'
import LabTable from './LabTable'
import Request from './Request'

const student = {
  name: 'Kristin Watson',
  image: '',
  registrationDate: '03.07.2024'
}

const Labs = ({ data }: { data?: Lab[] }) => {
  return (
    <div>
      <Breacrumbs />
      <StudentInfo student={student} />
      <div className='grid grid-cols-12 mt-6 gap-6'>
        <Sidebar />
        <div className='col-span-10'>{data && <LabTable data={data} />}</div>
      </div>
    </div>
  )
}

export default Labs
