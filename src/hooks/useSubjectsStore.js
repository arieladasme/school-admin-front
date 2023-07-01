import { useDispatch, useSelector } from 'react-redux'
import { schoolAdminApi } from '../api'
import { addUser, loadUsers, loadError } from '../store/users/usersSlice'

export const useSubjectsStore = () => {
  const { users } = useSelector(state => state.users)
  const dispatch = useDispatch()

  // Obtener todos los usuarios
  const getAllUsers = async () => {
    try {
      const { data } = await schoolAdminApi.get('users')
      dispatch(loadUsers(data))
    } catch (error) {
      console.log(error)
    }
  }

  // Crear usuario
  const createSubject = async subject => {
    try {
      const { data } = await schoolAdminApi.post('subjects', subject)

      //  dispatch(addUser(data))
    } catch ({ response }) {
      const { data } = response
      const errorMessage = data.message
        ? data.message
        : data.error
        ? data.error
        : 'An error occurred'
      //dispatch(loadError(errorMessage))
      console.log(errorMessage)
    }
  }

  return {
    // propiedades
    users,
    // metodos
    getAllUsers,
    createSubject,
  }
}
