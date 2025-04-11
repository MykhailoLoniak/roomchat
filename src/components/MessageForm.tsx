import React from 'react'
import SendIcon from '../assets/icons/send.svg'

export const MessageForm = () => {
  return (
    <form className="w-full flex gap-4 items-center">
      <label className="w-full">
        <input
          type="text"
          className="mt-4 h-12 w-full rounded-md border border-[1px] border-[#f0f0f0] ps-4"
          placeholder="Type a message..."
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
