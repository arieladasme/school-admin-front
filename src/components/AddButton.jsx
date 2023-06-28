//import { useCalendarStore, useUiStore } from '../../hooks'
import { AddCircleOutline } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useState } from 'react'
export const AddButton = () => {
  //const { openDateModal } = useUiStore()
  //const { setActiveEvent } = useCalendarStore()
  const handleClickNew = () => {
    /* setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#fafafa',
      user: { _id: '123', name: 'Pepe' },
    })
    openDateModal()*/
  }

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Button
      onClick={handleOpen}
      variant="contained"
      color="primary"
      startIcon={<AddCircleOutline />}
    >
      Crear curso
    </Button>
  )
}
