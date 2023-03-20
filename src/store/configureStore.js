import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import { authSlice } from './auth'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  auth: authSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})
