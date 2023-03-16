import { schoolAdminApi } from './'

export const loginUser = async body => {
  try {
    const { data } = await schoolAdminApi.post('/auth/login', body)
    localStorage.setItem('token', data.token)
    localStorage.setItem('token-init-date', new Date().getTime())

    return { ok: true, resp: data }
  } catch (error) {
    return { ok: false, errorMsg: error.response.data.message }
  }
}
