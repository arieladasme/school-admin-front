import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking',
    user: {},
    errorMsg: undefined,
  },
  reducers: {
    checkingCredentials: state => {
      state.status = 'checking'
      state.user = {}
      state.errorMsg = undefined
    },
    login: (state, { payload }) => {
      state.status = 'auth'
      state.user = payload
    },
    logout: (state, { payload }) => {
      state.status = 'not-auth'
      state.user = {}
      state.errorMsg = payload
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
