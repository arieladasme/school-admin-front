import { useDispatch, useSelector } from 'react-redux'
import { schoolAdminApi } from '../api'
import { checkingCredentials, login, logout } from '../store/auth/authSlice'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const checkAuth = (email, password) => {
    return async dispatch => {
      dispatch(checkingCredentials())
    }
  }

  const startLogin = body => {
    return async dispatch => {
      dispatch(checkingCredentials())

      try {
        const { data } = await schoolAdminApi.post('/auth/login', body)
        localStorage.setItem('token', data.token)
        localStorage.setItem('token-init-date', new Date().getTime())

        dispatch(login(data))
      } catch (error) {
        dispatch(logout(error.response.data.message))
      }
    }
  }

  const startLogout = () => {
    return async dispatch => {
      localStorage.clear()

      dispatch(logout())
    }
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) return dispatch(logout())

    try {
      const { data } = await schoolAdminApi.get('auth/refresh-token')
      localStorage.setItem('token', data)
      localStorage.setItem('token-init-date', new Date().getTime())
      // dispatch(login(data))
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
    checkAuth,
    checkAuthToken,
    startLogout,
  }
}
