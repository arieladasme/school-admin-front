import axios from 'axios'
import { getEnvVariables } from '../helpers'

// Obtiene la URL de la API desde las variables de entorno
const { VITE_API_URL } = getEnvVariables()

// Crea una instancia de axios para la API de administración de la escuela
const schoolAdminApi = axios.create({
  baseURL: VITE_API_URL,
})

// Interceptor para agregar el token de autenticación en los encabezados de las solicitudes
schoolAdminApi.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    authtoken: localStorage.getItem('token'),
  }
  return config
})

// Exporta la instancia de la API de administración de la escuela
export default schoolAdminApi
