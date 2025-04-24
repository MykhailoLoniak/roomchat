import React from 'react'
import { Link } from 'react-router-dom'

import { RoomType } from '../../../types/RoomType'
import MessageIcon from '../../../assets/icons/message-reply.svg'
import UserIcon from '../../../assets/icons/message-reply-person.svg'
import { useRoomCardController } from './roomCard.controller'

import { styles } from './roomCard.styles'

interface Props {
  room: RoomType
}

export const RoomCard: React.FC<Props> = ({ room }) => {
  const { allUser, online, allMessages, unreadMessages } =
    useRoomCardController()

  return (
    <div className={styles.card}>
      <Link className={styles.link} to={`/room/${room.title}`}>
        <div>
          <h3 className={styles.title}>{room.title}</h3>
          <span className={styles.description}>{room.description}</span>
        </div>

        <div className="mt-6">
          <hr className={styles.divider} />
          <div className={styles.footer}>
            <div className={styles.messages}>
              <img src={MessageIcon} alt="messages" />
              <span>{allMessages}</span>/
              <span className="text-[#f04438]">{`+${unreadMessages}`}</span>
            </div>
            <div className={styles.users}>
              <img src={UserIcon} alt="users" />
              <span>{allUser}</span>/
              <span className={styles.userStatus}>
                {online}
                <span className={styles.greenDot}></span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
