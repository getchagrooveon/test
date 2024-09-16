import type { FunctionComponent } from 'react'
import Image from 'next/image'

interface StudentInfoProps {
  student: {
    name: string
    image: string
    registrationDate: string
  }
}

const StudentInfo: FunctionComponent<StudentInfoProps> = ({ student }) => {
  return (
    <div className='p-6 bg-white mt-5 rounded-md box-drop-shadow flex gap-6'>
      <Image
        src={student.image ? student.image : `/images/avatars/avatar.png`}
        alt={student.name}
        width={100}
        height={100}
      />
      <div className='my-1'>
        <div className='text-2xl font-medium'>{student.name}</div>
        <div className='flex gap-2 items-center'>
          <div className='text-xs font-normal text-gray-500'>Registration Date:</div>
          <div className='text-sm font-normal'>{student.registrationDate}</div>
        </div>
        <button className='mt-2 rounded-2xl px-3 py-1 text-white secondary-green font-medium text-xs font-sans'>
          Ongoing Educational Program
        </button>
      </div>
    </div>
  )
}

export default StudentInfo
