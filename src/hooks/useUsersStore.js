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

  // Editar usuario
  const editUser = async user => {
    try {
      const { data } = await schoolAdminApi.patch(`users/${user.id}`, user)

      dispatch(editUserReducer(data))
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
    users,
    // metodos
    getAllUsers,
    createUser,
    editUser,
  }
}
