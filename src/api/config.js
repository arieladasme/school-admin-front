import axios from 'axios'

const API_BASE_URL = 'http://localhost:3001/api'

export const axiosConfig = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})