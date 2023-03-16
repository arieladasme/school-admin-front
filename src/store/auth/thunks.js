import { loginUser } from '../../api/auth'
import { checkingCredentials, login, logout } from './'

export const checkAuth = (email, password) => {
  return async dispatch => {
    dispatch(checkingCredentials())
  }
}

export const startLogin = data => {
  return async dispatch => {
    dispatch(checkingCredentials())
    const result = await loginUser(data)
    if (!result.ok) return dispatch(logout(result.errorMsg))

    dispatch(login(result.resp))
  }
}

export const startLogout = () => {
  return async dispatch => {
    localStorage.clear()

    dispatch(logout())
  }
}
