import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import useAuthStore from '../store/userStore'
import { PublicRooms } from '../components/allRooms/publicRooms/PublicRooms'
import { PrivateRooms } from '../components/allRooms/privateRooms'
import ChatModeButtons from '../components/allRooms/chatModeButtons/ChatModeButtons'

export const Rooms = () => {
  const [chatMode, setChatMode] = useState('group')
  const { user } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate('/login')
  }, [])

  return (
    <div className="w-full flex flex-col">
      <ChatModeButtons chatMode={chatMode} setChatMode={setChatMode} />
      {chatMode === 'group' ? <PublicRooms /> : <PrivateRooms />}
    </div>
  )
}
