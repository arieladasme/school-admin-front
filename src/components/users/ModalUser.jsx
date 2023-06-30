import { useState } from 'react'
import {
  Button,
  Modal,
  TextField,
  Box,
  Grid,
  RadioGroup,
  Radio,
  FormControlLabel,
  Alert,
} from '@mui/material'

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

const roles = [
  { label: 'Estudiante', id: 'student' },
  { label: 'Docente', id: 'teacher' },
  { label: 'Admin', id: 'admin' }, // TODO: solo debe estar con el perfil admin
]

export const ModalUser = ({
  handleClose,
  handleSubmit,
  formValues,
  handleFormValueChange,
  editingId,
  open,
  errMsg,
}) => {
  const [role, setRole] = useState('')

  const handleChangeRol = event => {
    setRole(event.target.value)
    handleFormValueChange(event)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="user form"
      aria-describedby="user form"
    >
      <Box sx={style}>
        <h2 id="simple-modal-title">Nuevo Usuario</h2>
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
            <Grid item xs={8}>
              <TextField
                label="2do nombre"
                name="middleName"
                value={formValues.middleName}
                onChange={handleFormValueChange}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Apellido"
                name="lastName"
                value={formValues.lastName}
                onChange={handleFormValueChange}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="2do apellido"
                name="secondLastName"
                value={formValues.secondLastName}
                onChange={handleFormValueChange}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Email"
                name="email"
                value={formValues.email}
                onChange={handleFormValueChange}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Rut"
                name="rut"
                type="number"
                value={formValues.rut}
                onChange={handleFormValueChange}
              />
            </Grid>
            <Grid item xs={16}>
              <RadioGroup name="role" value={role} defaultValue="admin" onChange={handleChangeRol}>
                {roles.map(role => (
                  <FormControlLabel
                    key={role.id}
                    value={role.id}
                    control={<Radio />}
                    label={role.label}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid container display={!!errMsg ? '' : 'none'} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Alert severity="error">{errMsg}</Alert>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!formValues.name || !formValues.email}
          >
            {editingId ? 'Save Changes' : 'Guardar usuario'}
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </form>
      </Box>
    </Modal>
  )
}
