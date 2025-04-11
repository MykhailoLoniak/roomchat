import React from 'react'
import useRoomsStore from '../store/roomsStore'
import { RoomCard } from './RoomCard'
import { RoomType } from '../types/RoomType'

export const RecentRooms = () => {
  const { rooms } = useRoomsStore()

  return (
    <div className="mt-12">
      <h3 className="poppins-semibold text-[22px]">Recent Rooms</h3>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {rooms.slice(0, 3).map((room: RoomType) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  )
}
