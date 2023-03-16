import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Grid, CircularProgress } from '@mui/material'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { HomeRoutes } from '../home/routes/HomeRoutes'
import { useAuthStore } from '../hooks'
import { LoginPage } from '../auth/pages'

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [])

  if (status === 'checking') {
    return (
      // TODO: crear componente
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
      >
        <Grid item justifyContent="center">
          <CircularProgress color="info" />
        </Grid>
      </Grid>
    )
  }

  return (
    <Routes>
      {status === 'not-auth' ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Route path="/*" element={<HomeRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
