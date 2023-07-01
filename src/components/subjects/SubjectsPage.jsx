import { useEffect, useState } from 'react'
import { TextField, Grid, Table, TableBody, TableContainer, Button } from '@mui/material'
import { useSubjectsStore } from '../../hooks'
import { TableHeadSubjects, TableRowsSubjects } from './'

const initialForm = {
  code: '',
  name: '',
}

export const SubjectsPage = () => {
  const [formValues, setFormValues] = useState(initialForm)
  const { subjects, createSubject, getAllSubjects } = useSubjectsStore()

  useEffect(() => {
    if (subjects?.length === 0) getAllSubjects()
  }, [])
  const handleSubmit = event => {
    event.preventDefault()
    createSubject(formValues)
  }

  const handleFormValueChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <h1>Asignaturas</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} columns={2}>
          <Grid item xs={2}>
            <TextField
              label="Codigo"
              name="code"
              value={formValues.code}
              onChange={handleFormValueChange}
            />
            <TextField
              label="Nombre"
              name="name"
              value={formValues.name}
              onChange={handleFormValueChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Grid item xs={1}>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>

              <Button variant="contained" color="secondary" onClick={() => {}}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/*  {errors.code && <span>Codigo obligatorio</span>}
        {errors.name && <span>Nombre obligatorio</span>} */}

        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="subject table">
            <TableHeadSubjects />
            <TableBody>
              {subjects?.map(subject => (
                <TableRowsSubjects key={subject.code} {...{ subject }} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </>
  )
}
