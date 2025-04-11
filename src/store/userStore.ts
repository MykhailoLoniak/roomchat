import { create } from 'zustand'
import { UserType } from '../types/UserType'

interface UserState {
  user: UserType | null
  login: (user: UserType) => void
  logout: () => void
}

const useAuthStore = create<UserState>((set) => {
  const storedUser = localStorage.getItem('user')
  const parsedUser = storedUser ? JSON.parse(storedUser) : null

  return {
    user: parsedUser,
    login: (user: UserType) => set({ user }),
    logout: () => set({ user: null }),
  }
})

export default useAuthStore
