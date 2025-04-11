import React, { useState } from 'react'
import FormLogin from '../components/FormLogin'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="flex justify-center items-center w-full h-[calc(100vh-100px)]">
      <div className="flex flex-col items-center justify-center bg-white w-[489px] py-6 rounded-[8px]">
        <h1 className="inter-semi-bold text-2xl"> Log in</h1>
        <FormLogin />
        <span className="mt-6 text-[#909090]">
          Have no account yes?{' '}
          <Link to="../sign-up" className="text-[#4d5dfb]">
            Sign up
          </Link>
        </span>
      </div>
    </div>
  )
}
