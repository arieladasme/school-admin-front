import { useDispatch, useSelector } from 'react-redux'
import { schoolAdminApi } from '../api'
import { loadCourses } from '../store/courses/coursesSlice'
import { useUsersStore } from './useUsersStore'
import { useSubjectsStore } from './useSubjectsStore'

export const useCoursesStore = () => {
  const { courses } = useSelector(state => state.courses)
  const { users } = useUsersStore()
  const { subjects } = useSubjectsStore()

  const dispatch = useDispatch()

  // Obtener todos los cursos
  const getAllcourses = async () => {
    try {
      const { data } = await schoolAdminApi.get('courses')

      let result = []
      // codigo temporal
      data.forEach(item => {
        let subject = subjects.find(s => s.code === item.code)
        let teacher = users.find(u => u.id === item.teacher)
        let students = item.students.map(id => users.find(u => u.id === id))

        result.push({
          subject: { code: subject.code, name: subject.name },
          teacher: { id: teacher.id, name: `${teacher.name} ${teacher.lastName}` },
          students: students.map(s => ({ id: s.id, name: `${s.name} ${s.lastName}` })),
        })
      })

      dispatch(loadCourses(result))
    } catch (error) {
      console.log(error)
    }
  }

  // Crear usuario
  const createCourse = async course => {
    try {
      const { data } = await schoolAdminApi.post('courses', course)
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
    courses,
    // metodos
    createCourse,
    getAllcourses,
  }
}
