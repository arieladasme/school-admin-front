import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-auth',
    user: {},
    errorMsg: undefined,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 'auth'
      state.user = payload
    },
    logout: (state, { payload }) => {
      state.status = 'not-auth'
      state.user = {}
      state.errorMsg = payload
    },
    checkingCredentials: state => {
      state.status = 'checking'
      state.user = {}
      state.errorMsg = undefined
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
