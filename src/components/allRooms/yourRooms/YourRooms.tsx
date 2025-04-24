import { RoomCard } from '../roomCard/RoomCard'
import { RoomType } from '../../../types/RoomType'
import { useYourRoomsController } from './YourRooms.controller'

import { styles } from './yourRooms.styles'

export const YourRooms = () => {
  const { rooms } = useYourRoomsController()

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Recent Rooms</h3>
      <div className={styles.roomsGrid}>
        {rooms.map((room: RoomType) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  )
}
