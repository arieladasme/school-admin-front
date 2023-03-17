import axios from 'axios'
import { getEnvVariables } from '../helpers'

const { VITE_API_URL } = getEnvVariables()

const schoolAdminApi = axios.create({
  baseURL: VITE_API_URL,
})

// interceptors
schoolAdminApi.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    authtoken: localStorage.getItem('token'),
  }
  return config
})

export default schoolAdminApi
