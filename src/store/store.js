import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { usersSlice } from './users'
import { subjectsSlice } from './subjects'
import { coursesSlice } from './courses'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    users: usersSlice.reducer,
    subjects: subjectsSlice.reducer,
    courses: coursesSlice.reducer,
  },
})
