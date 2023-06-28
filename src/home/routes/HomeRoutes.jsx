import { Navigate, Route, Routes } from 'react-router-dom'
import { UsersPage, CoursesPage } from '../../components'
import { Perfil, Attendance } from '../components'
import { HomeLayout } from '../layout/HomeLayout'
import { HomePage } from '../pages/HomePage'
import { Subjects } from '../../components'

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
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </HomeLayout>
  )
}
