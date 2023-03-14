import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-auth', // 'checking', 'auth'
    userId: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMsg: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 'auth'
      state.uid = payload.uid
      state.email = payload.email
      state.displayName = payload.displayName
      state.photoURL = payload.photoURL
      state.errorMessage = payload.errorMessage
    },
    logout: (state, { payload }) => {
      state.status = 'not-auth' // 'checking', 'auth'
      state.userId = null
      state.email = null
      state.displayName = null
      state.photoURL = null
      state.errorMsg = payload
    },
    checkingCredentials: state => {
      state.status = 'checking'
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
