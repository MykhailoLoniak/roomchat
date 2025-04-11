import React from 'react'
import useAuthStore from '../store/userStore'

interface Props {
  h: string
  w: string
}

export const UserIcon: React.FC<Props> = ({ h, w }) => {
  const { user } = useAuthStore()
  const ava = user?.ava

  return (
    <img src={ava} alt="user avatar" className={`rounded-full ${h} ${w}`} />
  )
}
