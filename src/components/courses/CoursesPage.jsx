import { useState } from 'react'
import {
  Grid,
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Avatar,
  Button,
} from '@mui/material'
import { MoreVert, Favorite, Share, ExpandMore, AddCircleOutline } from '@mui/icons-material'
import { ModalCourses } from './ModalCourses'

const courses = [
  { id: 1, code: 'AAA', teacherId: 5 },
  { id: 2, code: 'BBB', teacherId: 5 },
  { id: 3, code: 'CCC', teacherId: 5 },
  { id: 4, code: 'DDD', teacherId: 5 },
  { id: 5, code: 'EEE', teacherId: 5 },
]

export const CoursesPage = () => {
  const [open, setOpen] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
  })

  const handleFormValueChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    })
  }

  const handleAddButton = () => {
    setFormValues({
      name: '',
      email: '',
    })

    setOpen(true)
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
          <Grid key={course.id} item>
            <Card>
              <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
                action={
                  <IconButton aria-label="settings">
                    <MoreVert />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia image="/static/images/cards/paella.jpg" title="Paella dish" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together
                  with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Favorite />
                </IconButton>
                <IconButton aria-label="share">
                  <Share />
                </IconButton>
                <IconButton onClick={() => {}} aria-label="show more">
                  <ExpandMore />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <ModalCourses {...{ open, handleClose, formValues, handleFormValueChange }} />
    </>
  )
}
