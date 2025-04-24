import React from 'react'
import { styles } from './chatModeButtons.styles'

interface ChatModeButtonsProps {
  chatMode: string
  setChatMode: React.Dispatch<React.SetStateAction<string>>
}

const ChatModeButtons: React.FC<ChatModeButtonsProps> = ({
  chatMode,
  setChatMode,
}) => {
  const activeButtonClass = (mode: string) =>
    chatMode === mode ? styles.activeButton : ''

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <button
          onClick={() => setChatMode('group')}
          className={`${styles.button} ${activeButtonClass('group')}`}
        >
          Rooms
        </button>
        <button
          onClick={() => setChatMode('private')}
          className={`${styles.button} ${activeButtonClass('private')}`}
        >
          Private chats
        </button>
      </div>
    </div>
  )
}

export default ChatModeButtons
