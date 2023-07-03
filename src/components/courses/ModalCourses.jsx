import React, { useEffect, useState } from 'react'
import { Button, Modal, TextField, Box, Grid, MenuItem, Divider } from '@mui/material'
import { useSubjectsStore, useUsersStore } from '../../hooks'

import { SelectMultiple } from './SelectMultiple'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 2,
  flexGrow: 1,
}

export const ModalCourses = ({
  handleClose,
  handleSubmit,
  formValues,
  handleFormValueChange,
  open,
}) => {
  const [students, setStudents] = useState([])
  const [teachers, setTeachers] = useState([])
  const { subjects, getAllSubjects } = useSubjectsStore()
  const { users, getAllUsers } = useUsersStore()

  useEffect(() => {
    if (subjects?.length === 0) getAllSubjects()
    if (users?.length === 0) getAllUsers()

    setStudents(users.filter(user => user.role === 'student'))
    setTeachers(users.filter(user => user.role === 'teacher'))
  }, [])

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <h2 id="modal-title">Nuevo curso</h2>
        <Divider sx={{ marginBottom: 3 }} />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                id="subjectSelected"
                name="code"
                select
                label="Asignatura"
                defaultValue=""
                helperText="Seleccione asignatura"
                onChange={handleFormValueChange}
              >
                {subjects.map(subject => (
                  <MenuItem key={subject.code} value={subject.code}>
                    {subject.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="teacherSelected"
                name="teacher"
                select
                label="Docente"
                defaultValue=""
                helperText="Seleccione Docente"
                onChange={handleFormValueChange}
              >
                {teachers.map(teacher => (
                  <MenuItem key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <SelectMultiple
                {...{
                  handleSubmit,
                  formValues,
                  handleFormValueChange,
                  students,
                }}
              />
            </Grid>
          </Grid>
          <Divider sx={{ marginTop: 1 }} />
          <Grid container rowSpacing={1}>
            <Grid item xs={12} sx={{ marginTop: 1 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!formValues.code || !formValues.teacher || !formValues.students[0]}
              >
                Agregar curso
              </Button>

              <Button
                variant="contained"
                color="secondary"
                onClick={handleClose}
                sx={{ marginLeft: 1 }}
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  )
}
