import React from 'react'
import useRoomsStore from '../../store/roomsStore'

export const useAllRoomController = () => {
  const { rooms } = useRoomsStore()
  const categories = Array.from(new Set(rooms.map((room) => room.category)))

  return {
    rooms,
    categories,
  }
}
