import { Button, TextField, Grid } from '@mui/material'
import { useForm } from 'react-hook-form'

export const Subjects = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = data => console.log(data)

  console.log(watch('example'))
  return (
    <>
      <h1>Asignaturas</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={2}>
            <TextField label="Codigo" {...register('code', { required: true })} />
          </Grid>
          <Grid item xs={2}>
            <TextField label="Nombre" {...register('name', { required: true })} />
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" color="secondary" onClick={() => {}}>
              Cancel
            </Button>
          </Grid>
        </Grid>

        {errors.code && <span>Codigo obligatorio</span>}
        {errors.name && <span>Nombre obligatorio</span>}
      </form>
    </>
  )
}
