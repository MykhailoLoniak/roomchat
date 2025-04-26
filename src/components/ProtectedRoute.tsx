import { Navigate } from 'react-router-dom'
import userStore from '../store/userStore'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = userStore()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
