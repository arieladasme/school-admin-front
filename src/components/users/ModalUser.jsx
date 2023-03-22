import React from 'react'
import { Button, Modal, TextField, Box } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const ModalUser = ({
  handleClose,
  handleSubmit,
  formValues,
  handleFormValueChange,
  editingId,
  open,
}) => {
  return (
    <Modal
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="user form"
      aria-describedby="user form"
    >
      <Box sx={style}>
        <h2 id="simple-modal-title">User Form1</h2>
        <form
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            margin: '1rem 0',
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Name"
            name="name"
            value={formValues.name}
            onChange={handleFormValueChange}
          />
          <TextField
            label="Email"
            name="email"
            value={formValues.email}
            onChange={handleFormValueChange}
          />
          <div sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!formValues.name || !formValues.email}
            >
              {editingId ? 'Save Changes' : 'Add User'}
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  )
}
