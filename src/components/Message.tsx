import React from 'react'
import { MessageType } from '../types/MessageType'
import userStore from '../store/userStore'

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

  console.log('message', message)
  console.log('user', user)

  console.log('user:::::::::::::::::::::', user)

  if (message.userId === user?.id) {
    return (
      <div className="m-1">
        <div className="flex justify-end">
          <span>You</span>
        </div>
        <div className="flex w-full justify-end">
          <div
            style={{ backgroundColor: '#fad0e3' }}
            className="bg-gray-400 w-[660px] rounded-md p-4  flex flex-col"
          >
            <span>{message.message}</span>
            <span className="text-right text-sm text-gray-700">{`${time}`}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="m-1">
      <div className="flex">
        <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
          {message.name.slice(0, 1)}
        </div>
        <span>{message.name.slice(1)}</span>
      </div>
      <div
        style={{ backgroundColor: '#e4d6ff' }}
        className="bg-gray-400 w-[660px] rounded-md p-4  flex flex-col"
      >
        <span>{message.message}</span>
        <span className="text-right text-sm text-gray-700">{`${time}`}</span>
      </div>
    </div>
  )
}
