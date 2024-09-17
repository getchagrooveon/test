'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Checkbox from '@mui/material/Checkbox'

// Component Imports
import { Grid, Typography } from '@mui/material'

import { Search } from 'lucide-react'

import DialogCloseButton from '../DialogCloseButton'

import CustomTextField from '@/@core/components/mui/TextField'
import type { Lab } from '@/types/apps/labsTypes'

type RequestLabProps = {
  open: boolean
  setOpen: (open: boolean) => void
  data: Partial<Lab>[]
}

const mockData: Partial<Lab>[] = [
  { id: 10, name: 'Immunology Fundamentals' },
  { id: 11, name: 'Hematology' },
  { id: 12, name: 'Orthopedics and Musculoskeletal Health' },
  { id: 13, name: 'Obstetrics and Gynecology' },
  { id: 14, name: 'Cardiovascular System Studies' },
  { id: 15, name: 'Renal Physiology' },
  { id: 16, name: 'Endocrinology Basics' },
  { id: 17, name: 'Advanced Cardiopulmonary Systems' }
]

const RequestLab = ({ open, setOpen, data = mockData }: RequestLabProps) => {
  // States
  const [text, setText] = useState('')
  const [filteredList, setFilteredList] = useState<Partial<Lab>[]>(data)
  const [labList, setLabList] = useState<Partial<Lab>[]>([])

  const handleClose = () => {
    setOpen(false)
    setText('')
  }

  const toggleLabList = (id: number) => {
    setLabList(prevLabList => {
      if (prevLabList.some(lab => lab.id === id)) {
        return prevLabList.filter(lab => lab.id !== id)
      } else {
        const labToAdd = data.find(lab => lab.id === id)

        if (labToAdd) {
          return [...prevLabList, labToAdd]
        }

        return prevLabList
      }
    })
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value

    setText(searchText)

    const filtered = data.filter(item => item.name?.toLowerCase().includes(searchText.toLowerCase()))

    setFilteredList(filtered)
  }

  const sendForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    // const ids = list.filter(item => item.id)

    // await updateList(ids)
    //   .unwrap()
    //   .then(() => {
    //     toast.success('The lab list updated successfully')
    //     setLabList([])
    //   })
    //   .catch(error => toast.error(error))
  }

  return (
    <Dialog open={open} onClose={handleClose} sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}>
      <DialogCloseButton onClick={() => setOpen(false)} disableRipple>
        <i className='tabler-x' />
      </DialogCloseButton>
      <DialogTitle variant='h4' className='flex flex-col gap-2 text-left p-6 sm:pbs-16 sm:pbe-6 sm:pli-16'>
        Request New Lesson
        <Typography component='span' className='flex flex-col text-left'>
          Please select the lesson you want to request for the student
        </Typography>
      </DialogTitle>
      <form onSubmit={sendForm}>
        <DialogContent className='overflow-visible pbs-0 p-6 sm:pli-16 min-h-[450px]'>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <div className='relative'>
                <CustomTextField
                  id='textSearch'
                  name='textSearch'
                  autoComplete='off'
                  placeholder='Search'
                  value={text}
                  onChange={handleTextChange}
                  className='w-full'
                />
                <Search size={16} className='absolute top-3 left-3' />
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} className='mt-6 font-medium text-lg'>
            {filteredList.length} {filteredList.length === 1 ? 'option' : 'options'}
          </Grid>
          <Grid item xs={12} className='mt-4'>
            <ul className='list-none'>
              {filteredList.map(item => (
                <li key={item.id} className='flex gap-2 items-center justify-start'>
                  <Checkbox
                    onChange={() => item?.id !== undefined && toggleLabList(item.id)}
                    checked={item.id !== undefined && labList.some(lab => lab.id === item.id)}
                    className='custom-checkbox'
                  />
                  {item.name}
                </li>
              ))}
            </ul>
          </Grid>
        </DialogContent>

        <DialogActions className='justify-end pbs-0 p-6 sm:pbe-16 sm:pli-16'>
          <Button
            variant='tonal'
            type='reset'
            color='secondary'
            onClick={handleClose}
            className='rounded-4xl px-6 bg-gray-300 text-gray-700'
          >
            Close
          </Button>
          <Button
            variant='contained'
            type='submit'
            onClick={handleClose}
            className='rounded-4xl px-10 text-white bg-primary-purple'
          >
            Send
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default RequestLab
