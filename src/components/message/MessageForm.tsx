import React, { useEffect, useRef } from 'react'
import SendIcon from '../../assets/icons/send.svg'
import { MockWebSocket } from '../../api/MockWebSocket'

interface Props {
  setMessageArr: React.Dispatch<
    React.SetStateAction<
      {
        id: number
        userId: number
        name: string
        message: string
        sentAt: string
      }[]
    >
  >
}

export const MessageForm: React.FC<Props> = ({ setMessageArr }) => {
  const [input, setInput] = React.useState('')
  const socketRef = useRef<MockWebSocket | null>(null)

  useEffect(() => {
    const socket = new MockWebSocket('ws://mock-chat')
    socketRef.current = socket

    socket.onopen = () => {
      console.log('✅ Зʼєднання відкрите')
    }

    socket.onmessage = (event: MessageEvent) => {
      const message = JSON.parse(event.data)
      setMessageArr((prev) => [...prev, message])
    }

    socket.onclose = () => {
      console.log('❌ Зʼєднання закрите')
    }

    return () => {
      socket.close()
    }
  }, [])

  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!input.trim()) return

    const myMessage = {
      id: Date.now(),
      userId: 1,
      name: 'Misha',
      sentAt: new Date().toISOString(),
      message: input,
    }

    setMessageArr((prev) => [...prev, myMessage])

    socketRef.current?.send(JSON.stringify(myMessage))
    setInput('')
  }

  return (
    <form className="w-full flex gap-4 items-center" onSubmit={handleSend}>
      <label className="w-full">
        <input
          type="text"
          className="mt-4 h-12 w-full rounded-md border border-[1px] border-[#f0f0f0] ps-4"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>

      <button
        type="submit"
        className="flex bg-[#675af5] mt-4 h-12 rounded-md py-4 px-6 text-white gap-2 items-center poppins-semibold"
      >
        {' '}
        Send <img src={SendIcon} alt="" />
      </button>
    </form>
  )
}
