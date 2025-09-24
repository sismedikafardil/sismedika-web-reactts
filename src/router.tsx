import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import AdminUpload from './pages/AdminUpload'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-upload" element={<AdminUpload />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
