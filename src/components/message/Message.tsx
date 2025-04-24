import React from 'react'

import { MessageType } from '../../types/MessageType'
import userStore from '../../store/userStore'

import { styles } from './message.styles'

interface Props {
  message: MessageType
}

export const Message: React.FC<Props> = ({ message }) => {
  const { user } = userStore()
  const date = new Date(message.sentAt)
  const time = date.toLocaleTimeString('uk-UA', {
    hour: '2-digit',
    minute: '2-digit',
  })

  if (message.userId === user?.id) {
    return (
      <div className={styles.container}>
        <div className={styles.userNameContainer}>
          <span>You</span>
        </div>
        <div className="flex w-full justify-end">
          <div
            style={{ backgroundColor: '#fad0e3' }}
            className={styles.messageBox}
          >
            <span>{message.message}</span>
            <span className={styles.timestamp}>{`${time}`}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className="flex">
        <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
          {message.name.slice(0, 1)}
        </div>
        <span>{message.name.slice(1)}</span>
      </div>
      <div style={{ backgroundColor: '#e4d6ff' }} className={styles.messageBox}>
        <span>{message.message}</span>
        <span className={styles.timestamp}>{`${time}`}</span>
      </div>
    </div>
  )
}
