import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    waitingResponse: false,
    errMsg: '',
  },
  reducers: {
    loadUsers: (state, { payload = [] }) => {
      state.users = payload
    },
    addUser: (state, { payload }) => {
      state.users.push(payload)
    },
    waitingResponseReducer: (state, { payload }) => {
      state.waitingResponse = payload
    },
    loadError: (state, { payload }) => {
      state.errMsg = payload
    },
  },
})

export const { loadUsers, addUser, waitingResponseReducer, loadError } = usersSlice.actions
