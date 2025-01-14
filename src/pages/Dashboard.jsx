import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'

export default function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    navigate('/login')
  }

  return (
    <div className="flex h-screen bg-gray-100">
        <Sidebar onLogout={handleLogout} />
        <MainContent />
    </div>
  )
}

