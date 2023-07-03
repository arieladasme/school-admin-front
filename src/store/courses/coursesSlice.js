import { createSlice } from '@reduxjs/toolkit'

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    waitingResponse: false,
    errMsg: '',
  },
  reducers: {
    loadCourses: (state, { payload = [] }) => {
      state.courses = payload
    },
    addCourses: (state, { payload }) => {
      state.courses.push(payload)
    },
    loadError: (state, { payload }) => {
      state.errMsg = payload
    },
  },
})

export const { loadCourses, addCourses, loadError } = coursesSlice.actions
