import { axiosConfig } from './config'

export const getAllUsers = async () => {
  const response = await axiosConfig.get('/users')
  return response.data
}

export const registerUsers = async data => {
  const { displayName, email } = data

  try {
    const response = await axiosConfig.post('/auth/register', {
      name: displayName,
      lastName: 'TestName',
      email,
      password: '123GGsss',
    })
    return response.data
  } catch (error) {
    return error
  }
}
