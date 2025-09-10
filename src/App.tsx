import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import MainLayout from './components/layout/MainLayout'

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Router />
      </MainLayout>
    </BrowserRouter>
  )
}
