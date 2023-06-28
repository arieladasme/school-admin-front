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
                value={formValues.rut}
                onChange={handleFormValueChange}
              />
            </Grid>
            <Grid item xs={8}>
              <Autocomplete
                disablePortal
                id="rol"
                options={options}
                sx={{ width: 300 }}
                renderInput={params => <TextField {...params} name="rol" label="Rol" />}
                onChange={(event, value) => handleFormValueChange(event, value.id)}
                value={options.find(option => option.id === formValues.rol) || null}
                isOptionEqualToValue={(option, value) => option.id === value}
              />
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
