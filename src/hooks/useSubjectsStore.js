import { useDispatch, useSelector } from 'react-redux'
import { schoolAdminApi } from '../api'
import { loadSubjects, loadError, addSubjects } from '../store/subjects/subjectsSlice'

export const useSubjectsStore = () => {
  const { subjects } = useSelector(state => state.subjects)
  const dispatch = useDispatch()

  // Obtener todos los usuarios
  const getAllSubjects = async () => {
    try {
      const { data } = await schoolAdminApi.get('subjects')
      dispatch(loadSubjects(data))
    } catch (error) {
      console.log(error)
    }
  }

  // Crear usuario
  const createSubject = async subject => {
    try {
      const { data } = await schoolAdminApi.post('subjects', subject)

      dispatch(addSubjects(data))
    } catch ({ response }) {
      const { data } = response
      const errorMessage = data.message
        ? data.message
        : data.error
        ? data.error
        : 'An error occurred'
      dispatch(loadError(errorMessage))
      console.log(errorMessage)
    }
  }

  return {
    // propiedades
    subjects,
    // metodos
    getAllSubjects,
    createSubject,
  }
}
