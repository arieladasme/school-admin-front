import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-auth', // 'checking', 'auth'
    userId: null,
    email: null,
    name: null,
    lastName: null,
    middleName: null,
    secondLastName: null,
    roles: null,
    rut: null,
    photoURL: null,
    errorMsg: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 'auth'
      state.userId = payload.id
      state.email = payload.email
      state.name = payload.name
      state.lastName = payload.lastName
      state.middleName = payload.middleName
      state.secondLastName = payload.secondLastName
      state.roles = payload.roles
      state.rut = payload.rut
      state.photoURL = payload.photoURL
      state.errorMessage = payload.errorMessage
    },
    logout: (state, { payload }) => {
      state.status = 'not-auth' // 'checking', 'auth'
      state.userId = null
      state.email = null
      state.name = null
      state.lastName = null
      state.middleName = null
      state.secondLastName = null
      state.roles = null
      state.rut = null
      state.photoURL = null
      state.errorMsg = payload
    },
    checkingCredentials: state => {
      state.status = 'checking'
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
