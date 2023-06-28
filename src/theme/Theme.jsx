import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { purpleTheme } from './'

// Creamos el componente Theme que recibe children como parámetro
export const Theme = ({ children }) => {
  return (
    // Envolvemos los children con el componente ThemeProvider y le pasamos el objeto purpleTheme como prop theme
    <ThemeProvider theme={purpleTheme}>
      {/* Normalizo los estilos CSS en todos los navegadores */}
      <CssBaseline />
      {/* Renderizamos los children */}
      {children}
    </ThemeProvider>
  )
}
