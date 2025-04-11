import React from 'react'
import { RoomType } from '../types/RoomType'
import { Link } from 'react-router-dom'
import MessageIcon from '../assets/icons/message-reply-text.png'
import UserIcon from '../assets/icons/account-multiple.png'

interface Props {
  room: RoomType
}

export const RoomCard: React.FC<Props> = ({ room }) => {
  return (
    <div className="bg-white rounded-md py-4 px-6">
      <Link
        className="flex flex-col justify-between min-h-[200px]"
        to={`/room/${room.title}`}
      >
        <div>
          <h3 className="poppins-semibold text-[22px] pt-2">{room.title}</h3>
          <span className="poppins-regular text-sm text-gray-400">
            {room.description}
          </span>
        </div>

        <div className="mt-6">
          <hr className="border-t-2 border-gray-300 mb-4" />
          <div className="flex justify-between items-center text-gray-400 poppins-regular text-sm">
            <div className="flex gap-2 items-center">
              <img src={MessageIcon} alt="messages" />
              <span>10</span>/<span className="text-[#f04438]">+2</span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={UserIcon} alt="users" />
              <span>4</span>/
              <span className="flex items-center gap-1">
                1
                <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
