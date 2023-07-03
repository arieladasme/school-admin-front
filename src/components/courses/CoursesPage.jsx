import { useEffect, useState } from 'react'
import {
  Grid,
  Card,
  CardHeader,
  IconButton,
  ListItem,
  CardContent,
  List,
  CardActions,
  Avatar,
  Button,
  ListItemText,
} from '@mui/material'
import { MoreVert, Favorite, Share, ExpandMore, AddCircleOutline } from '@mui/icons-material'
import { ModalCourses } from './ModalCourses'
import { useCoursesStore } from '../../hooks/'

export const CoursesPage = () => {
  const { createCourse, getAllcourses, courses } = useCoursesStore()
  const [open, setOpen] = useState(false)
  const [formValues, setFormValues] = useState({
    code: '',
    teacher: '',
    students: [],
  })

  useEffect(() => {
    if (courses.length === 0) getAllcourses()
  }, [])

  const handleFormValueChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    })
  }

  const handleAddButton = () => {
    setFormValues({
      code: '',
      teacher: '',
      students: [],
    })

    setOpen(true)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('creando', formValues)
    createCourse(formValues)

    // handleClose()
  }

  const handleClose = () => setOpen(false)
  return (
    <>
      <div>CoursesPage</div>
      <Button
        onClick={handleAddButton}
        variant="contained"
        color="primary"
        startIcon={<AddCircleOutline />}
      >
        Crear curso
      </Button>

      <Grid container justifyContent="center" spacing={2}>
        {courses.map(course => (
          <Grid key={Math.random()} item>
            <Card>
              <CardHeader
                avatar={<Avatar aria-label="recipe">{course.subject.name[0]}</Avatar>}
                action={
                  <IconButton aria-label="settings">
                    <MoreVert />
                  </IconButton>
                }
                title={course.subject.name}
                subheader={`Docente: ${course.teacher.name}`}
              />

              <CardContent>
                <List>
                  {course.students.map(student => (
                    <CardHeader
                      avatar={<Avatar aria-label="recipe">{student.name[0]}</Avatar>}
                      title={student.name}
                    />
                  ))}
                </List>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="share">
                  <Share />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <ModalCourses {...{ open, handleClose, handleSubmit, formValues, handleFormValueChange }} />
    </>
  )
}
