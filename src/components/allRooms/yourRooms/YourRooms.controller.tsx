import useRoomsStore from '../../../store/roomsStore'

export const useYourRoomsController = () => {
  const { rooms } = useRoomsStore()

  return {
    rooms: rooms.slice(0, 2),
  }
}
