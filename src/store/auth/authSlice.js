import { createSlice } from '@reduxjs/toolkit'

// Slice de autenticación
export const authSlice = createSlice({
  name: 'auth', // Nombre del slice
  initialState: {
    // Estado inicial
    status: 'checking', // Estado de verificación por defecto
    user: {}, // Objeto usuario vacío
    errorMsg: undefined, // Mensaje de error es undefined por defecto
  },
  reducers: {
    // Reducer para cambiar el estado a 'checking' y restablecer los valores de user y errorMsg
    checkingCredentials: state => {
      state.status = 'checking'
      state.user = {}
      state.errorMsg = undefined
    },
    // Reducer para cambiar el estado a 'auth' y asignar el usuario recibido como payload
    login: (state, { payload }) => {
      state.status = 'auth'
      state.user = payload
    },
    // Reducer para cambiar el estado a 'not-auth', restablecer el valor de user y asignar el mensaje de error recibido como payload
    logout: (state, { payload }) => {
      state.status = 'not-auth'
      state.user = {}
      state.errorMsg = payload
    },
  },
})

// Exportar los actions generados automáticamente por createSlice
export const { login, logout, checkingCredentials } = authSlice.actions
