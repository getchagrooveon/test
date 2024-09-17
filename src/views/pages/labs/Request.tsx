import type { FunctionComponent } from 'react'

import type { ButtonProps } from '@mui/material/Button';
import Button from '@mui/material/Button'

import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick'
import RequestLab from '@/components/dialogs/request-lab/request-lab'

interface RequestProps {}

const Request: FunctionComponent<RequestProps> = () => {
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Request Lab',
    className:
      'bg-primary-purple text-white font-medium text-sm rounded-4xl px-6 py-2 font-sans cursor-pointer btn'
  }
  
  return (
    <div className='p-6 flex items-center justify-end bg-white'>
      <OpenDialogOnElementClick
        element={Button}
        elementProps={buttonProps}
        dialog={RequestLab}
      />
    </div>
  )
}

export default Request
