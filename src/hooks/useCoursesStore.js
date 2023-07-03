import { useDispatch, useSelector } from 'react-redux'
import { schoolAdminApi } from '../api'

export const useCoursesStore = () => {
  //const { courses } = useSelector(state => state.courses)
  //const dispatch = useDispatch()

  // Obtener todos los cursos
  /* const getAllcourses = async () => {
    try {
      const { data } = await schoolAdminApi.get('courses')
      dispatch(loadUsers(data))
    } catch (error) {
      console.log(error)
    }
  } */

  // Crear usuario
  const createCourse = async course => {
    try {
      const { data } = await schoolAdminApi.post('courses', course)
      console.log(data)
      //TODO:dispatch(addUser(data))
    } catch ({ response }) {
      const { data } = response
      const errorMessage = data.message
        ? data.message
        : data.error
        ? data.error
        : 'An error occurred'
      //TODO:dispatch(loadError(errorMessage))
      console.log(errorMessage)
    }
  }

  return {
    // propiedades
    //TODO: courses,
    // metodos
    createCourse,
  }
}
