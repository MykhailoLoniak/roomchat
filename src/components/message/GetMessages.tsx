import React, { useEffect, useRef, useState } from 'react'
import { Message } from './Message'
import { MessageType } from '../../types/MessageType'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { MessageForm } from '../message/MessageForm'

// Додаємо перевірку на існування локалі
TimeAgo.addLocale(en)

const messages = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  userId: (index % 5) + 1,
  name: ['Misha', 'Anna', 'John', 'Kate', 'Alex'][index % 5],
  message: `This is message number ${index + 1}`,
  sentAt: new Date(
    Date.now() - Math.floor(Math.random() * 1_000_000_000)
  ).toISOString(),
}))

console.log('____________________________________', messages)

const groupMessagesByDate = (messages: MessageType[]) => {
  return messages.reduce(
    (acc, message) => {
      const date = new Date(message.sentAt).toLocaleDateString('uk-UA')

      if (!acc[date]) {
        acc[date] = []
      }

      acc[date].push(message)
      return acc
    },
    {} as Record<string, MessageType[]>
  )
}

const isOlderThanThreeDays = (date: Date) => {
  const threeDaysAgo = new Date()
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)
  return date < threeDaysAgo
}

export const GetMessages = () => {
  const timeAgo = new TimeAgo('en-US')
  const listRef = useRef<HTMLDivElement>(null)
  const [messageArr, setMessageArr] = useState<MessageType[]>(messages)

  const groupedMessages = groupMessagesByDate(
    [...messageArr].sort(
      (a, b) => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime()
    )
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current.scrollHeight
      }
    }, 0)

    return () => clearTimeout(timer)
  }, [messageArr])

  return (
    <div
      ref={listRef}
      className="w-full element mb-[60px]"
      style={{ maxHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}
    >
      {Object.entries(groupedMessages).map(([date, messages]) => {
        const dateObject = new Date(messages[0]?.sentAt || Date.now())
        const formattedDate = isOlderThanThreeDays(dateObject)
          ? dateObject.toLocaleDateString('uk-UA')
          : timeAgo.format(dateObject)

        return (
          <div key={date + '-' + (messages[0]?.id ?? Math.random())}>
            <div className="text-center text-gray-600 font-semibold my-2">
              {formattedDate}
            </div>
            {messages.map((message) =>
              message ? <Message key={message.id} message={message} /> : null
            )}
          </div>
        )
      })}
      <MessageForm setMessageArr={setMessageArr} />
    </div>
  )
}
