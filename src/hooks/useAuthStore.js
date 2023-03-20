import { useDispatch, useSelector } from 'react-redux'
import { schoolAdminApi } from '../api'
import { checkingCredentials, login, logout } from '../store/auth/authSlice'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const startLogin = body => {
    return async dispatch => {
      dispatch(checkingCredentials())

      try {
        const { data } = await schoolAdminApi.post('/auth/login', body)
        const token = data.token
        delete data.token
        const user = data
        const userString = JSON.stringify(user)

        localStorage.setItem('user', userString)
        localStorage.setItem('token', token)
        localStorage.setItem('token-init-date', new Date().getTime())

        dispatch(login(data))
      } catch (error) {
        dispatch(logout(error.response.data.message))
      }
    }
  }

  const startLogout = () => {
    localStorage.clear()
    dispatch(logout())
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) return dispatch(logout())

    try {
      const { data } = await schoolAdminApi.get('auth/refresh-token')
      localStorage.setItem('token', data)
      localStorage.setItem('token-init-date', new Date().getTime())

      const user = JSON.parse(localStorage.getItem('user'))

      dispatch(login({ ...user, token: data }))
    } catch (error) {
      localStorage.clear()
      dispatch(logout())
    }
  }

  return {
    // propiedades
    status,
    user,
    errorMessage,
    // metodos
    startLogin,
    checkAuthToken,
    startLogout,
  }
}
