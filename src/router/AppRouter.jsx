import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeRoutes } from '../home/routes/HomeRoutes'
import { useAuthStore } from '../hooks'
import { LoginPage } from '../auth/pages'
export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [])

  return (
    <Routes>
      {status === 'not-auth' ? (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="*" element={<HomeRoutes />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  )
}
