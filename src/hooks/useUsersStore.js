import { useDispatch, useSelector } from 'react-redux'
import { schoolAdminApi } from '../api'
import { addUser, loadUsers, loadError, editUserReducer } from '../store/users/usersSlice'

export const useUsersStore = () => {
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
  const createUser = async user => {
    try {
      const { data } = await schoolAdminApi.post('users', user)
      dispatch(addUser(data))
    } catch (error) {
      const errorMessage = error.response.data.message || 'An error occurred'
      dispatch(loadError(errorMessage))
      console.log(error)
    }
  }

  // Editar usuario
  const editUser = async user => {
    try {
      const { data } = await schoolAdminApi.patch(`users/${user.id}`, user)

      dispatch(editUserReducer(data))
      console.log({ data })
    } catch (error) {
      const errorMessage = error.response.data.message || 'An error occurred'
      dispatch(loadError(errorMessage))
      console.log(error)
    }
  }

  return {
    // propiedades
    users,
    // metodos
    getAllUsers,
    createUser,
    editUser,
  }
}
