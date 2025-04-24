import { Fragment } from 'react'

import { RoomCard } from './roomCard/RoomCard'
import { RoomType } from '../../types/RoomType'
import { useAllRoomController } from './allRoom.controller'

import { styles } from './allRooms.styles'

export const AllRooms = () => {
  const { rooms, categories } = useAllRoomController()

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>All Rooms</h3>
      <div className={styles.wrapper}>
        {categories.map((e: string) => (
          <Fragment key={e}>
            <h3 className={styles.categoryTitle}>{e}</h3>
            <div className={styles.grid}>
              {rooms
                .filter((room: RoomType) => room.category === e)
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
