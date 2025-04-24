import { useParams } from 'react-router-dom'
import userStore from '../../store/userStore'

export const useHeaderController = () => {
  const { roomTitle } = useParams()
  const { user } = userStore()
  const ava = user?.ava

  return {
    user,
    ava,
    roomTitle,
  }
}
