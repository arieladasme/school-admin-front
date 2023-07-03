import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import { authSlice } from './auth'
import { usersSlice } from './users'
import { subjectsSlice } from './subjects'
import { coursesSlice } from './courses'
const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  users: usersSlice.reducer,
  subjects: subjectsSlice.reducer,
  courses: coursesSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})
