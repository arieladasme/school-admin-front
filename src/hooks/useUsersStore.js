import { useDispatch, useSelector } from 'react-redux'
import { schoolAdminApi } from '../api'
import { loadUsers } from '../store/users/usersSlice'

export const useUsersStore = () => {
  const { users } = useSelector(state => state.users)
  const dispatch = useDispatch()

  const getAllUsers = async () => {
    try {
      const { data } = await schoolAdminApi.get('users')

      dispatch(loadUsers(data))
    } catch (error) {
      console.log(error)
      //dispatch(logout())
    }
  }

  const createUser = async () => {
    try {
      const { data } = await schoolAdminApi.post('users/create')

      dispatch(loadUsers(data))
    } catch (error) {
      console.log(error)
      //dispatch(logout())
    }
  }

  return {
    // propiedades
    users,
    // metodos

    getAllUsers,
    createUser,
  }
}
