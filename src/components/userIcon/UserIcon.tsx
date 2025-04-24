import React from 'react'

interface Props {
  h: string
  w: string
  ava?: string
}

export const UserIcon: React.FC<Props> = ({ h, w, ava }) => {
  return (
    <img src={ava} alt="user avatar" className={`rounded-full ${h} ${w}`} />
  )
}
