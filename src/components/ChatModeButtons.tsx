import React from 'react'

interface ChatModeButtonsProps {
  chatMode: string
  setChatMode: React.Dispatch<React.SetStateAction<string>>
}

const ChatModeButtons: React.FC<ChatModeButtonsProps> = ({
  chatMode,
  setChatMode,
}) => {
  const activeButtomClass = (mode: string) =>
    chatMode === mode ? 'bg-[#ffffff]' : ''
  return (
    <div className="w-full flex justify-center">
      <div className="inline-block bg-[#7878801F] rounded-xl p-1 mt-12">
        <button
          onClick={() => setChatMode('group')}
          className={`h-6 w-[180px] rounded-xl ${activeButtomClass('group')}`}
        >
          Rooms
        </button>
        <button
          onClick={() => setChatMode('private')}
          className={`h-6 w-[180px] rounded-xl ${activeButtomClass('private')}`}
        >
          Private chats
        </button>
      </div>
    </div>
  )
}

export default ChatModeButtons
