import { axiosConfig } from './config'

export const loginUser = async data => {
  try {
    const resp = await axiosConfig.post('/auth/login', data)
    return { ok: true, resp: resp.data }
  } catch (error) {
    console.log('ERROR', error)
    return { ok: false, errorMsg: error.message }
  }
}
