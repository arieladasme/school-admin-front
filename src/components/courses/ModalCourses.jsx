import React from 'react'
import { Button, Modal, TextField, Box, Grid, Autocomplete } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 2,
}

const options = [
  { label: 'Estudiante', id: 1 },
  { label: 'Docente', id: 2 },
  { label: 'Admin', id: 3 }, // TODO: solo debe estar con el perfil admin
]

export const ModalCourses = ({
  handleClose,
  handleSubmit,
  formValues,
  handleFormValueChange,
  editingId,
  open,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="user form"
      aria-describedby="user form"
    >
      <Box sx={style}>
        <h2 id="simple-modal-title">Nuevo curso</h2>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <TextField
                label="Nombre"
                name="name"
                value={formValues.name}
                onChange={handleFormValueChange}
              />
            </Grid>
          </Grid>

          <Button variant="contained" color="primary" type="submit" disabled={!formValues.name}>
            {editingId ? 'Save Changes' : 'Add User'}
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </form>
      </Box>
    </Modal>
  )
}
