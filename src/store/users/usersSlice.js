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
    editUser: (state, { payload }) => {
      const { id } = payload
      const index = state.users.findIndex(user => user.id === id)
      if (index !== -1) {
        state.users[index] = payload
      }
    },
    waitingResponseReducer: (state, { payload }) => {
      state.waitingResponse = payload
    },
    loadError: (state, { payload }) => {
      state.errMsg = payload
    },
  },
})

export const { loadUsers, addUser, edit, waitingResponseReducer, loadError } = usersSlice.actions
