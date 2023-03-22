import { Navigate, Route, Routes } from 'react-router-dom'
import { UsersPage } from '../../components/UsersPage'
import { Perfil, Subjects, Attendance } from '../components/'
import { HomeLayout } from '../layout/HomeLayout'
import { HomePage } from '../pages/HomePage'

export const HomeRoutes = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/" />} />

        <Route path="/perfil" element={<Perfil />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/subjects" element={<Subjects />} />
      </Routes>
    </HomeLayout>
  )
}
