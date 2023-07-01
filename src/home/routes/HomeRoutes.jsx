import { Navigate, Route, Routes } from 'react-router-dom'
import { UsersPage } from '../../components'
import { CoursesPage } from '../../components/courses'
import { Perfil, Attendance } from '../components'
import { HomeLayout } from '../layout/HomeLayout'
import { HomePage } from '../pages/HomePage'
import { SubjectsPage } from '../../components/subjects'

export const HomeRoutes = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/" />} />

        <Route path="/perfil" element={<Perfil />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </HomeLayout>
  )
}
