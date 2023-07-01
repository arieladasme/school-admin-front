import { createSlice } from '@reduxjs/toolkit'

export const subjectsSlice = createSlice({
  name: 'subjects',
  initialState: {
    subjects: [],
    waitingResponse: false,
    errMsg: '',
  },
  reducers: {
    loadSubjects: (state, { payload = [] }) => {
      state.subjects = payload
    },
    addSubjects: (state, { payload }) => {
      state.subjects.push(payload)
    },
    loadError: (state, { payload }) => {
      state.errMsg = payload
    },
  },
})

export const { loadSubjects, addSubjects, loadError } = subjectsSlice.actions
