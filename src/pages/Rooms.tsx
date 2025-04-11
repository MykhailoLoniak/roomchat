import { useState } from 'react'
import useAuthStore from '../store/userStore'
import { useNavigate } from 'react-router-dom'
import useRoomsStore from '../store/roomsStore'
import ChatModeButtons from '../components/ChatModeButtons'
import { RecentRooms } from '../components/RecentRooms'
import { AllRooms } from '../components/AllRooms'
import { UserType } from '../types/UserType'

export const Rooms = () => {
  const { user } = useAuthStore()
  const { rooms } = useRoomsStore()
  const navigate = useNavigate()
  const [chatMode, setChatMode] = useState('group')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  // useEffect(() => {
  //   if (!user) navigate('/login')
  // }, [])

  return (
    <>
      <div className="w-full flex flex-col">
        <ChatModeButtons chatMode={chatMode} setChatMode={setChatMode} />
        <RecentRooms />
        <hr className="border-t-2 border-gray-300 my-4" />
        <AllRooms />
      </div>
    </>
  )
}
