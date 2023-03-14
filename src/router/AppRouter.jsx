import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { HomeRoutes } from '../home/routes/HomeRoutes'

export const AppRouter = () => {
  return (
    <Routes>
      {/* login registro */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* APP */}
      <Route path="/*" element={<HomeRoutes />} />

      {/*  <Route path="/*" element={<Navigate to="/auth/login" />} /> */}
    </Routes>
  )
}
