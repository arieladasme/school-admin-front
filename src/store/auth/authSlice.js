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
    login: (state /* action */) => {},
    logout: (state, payload) => {},
    checkingCredentials: state => {
      state.status = 'checking'
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions
