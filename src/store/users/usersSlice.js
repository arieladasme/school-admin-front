import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    loadUsers: (state, { payload = [] }) => {
      state.users = payload
    },
    createUser: (state, { payload }) => {
      state.users.push(payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadUsers, createUser } = usersSlice.actions
