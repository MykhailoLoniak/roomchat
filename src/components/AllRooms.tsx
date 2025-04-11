import React, { Fragment } from 'react'
import useRoomsStore from '../store/roomsStore'
import { RoomCard } from './RoomCard'
import { RoomType } from '../types/RoomType'

export const AllRooms = () => {
  const { rooms } = useRoomsStore()

  const categories = Array.from(new Set(rooms.map((room) => room.category)))

  return (
    <div className="mt-12">
      <h3 className="poppins-semibold text-[22px]">All Rooms</h3>
      <div className="">
        {categories.map((e: string) => (
          <Fragment key={e}>
            <h3 className="mt-8 text-gray-400 inter-regular">{e}</h3>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {rooms
                .filter((room) => room.category === e)
                .map((room: RoomType) => (
                  <RoomCard key={room.id} room={room} />
                ))}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
