import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
// import useAuthStore from "../store/userStore";

type FormData = {
  nickName: string
  password: string
}

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  // const { login } = useAuthStore();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Submitted Data:', data)

    // login({})
  }

  const inputClass =
    'h-10 w-full ps-4 border rounded-[8px] border-[#D9D9D9] focus:outline-none focus:border-[#5E53FF] '

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-6 w-full px-6"
    >
      <input
        className={inputClass}
        {...register('nickName', {
          required: 'Nickname обовʼязковий',
          minLength: {
            value: 3,
            message: 'Мінімум 3 символи',
          },
        })}
        placeholder="Nickname"
      />
      {errors.nickName && (
        <p style={{ color: 'red' }}>{errors.nickName.message}</p>
      )}

      <input
        className={inputClass}
        type="password"
        {...register('password', {
          required: 'Password обовʼязковий',
          minLength: {
            value: 6,
            message: 'Мінімум 6 символів',
          },
        })}
        placeholder="Password"
      />
      {errors.password && (
        <p style={{ color: 'red' }}>{errors.password.message}</p>
      )}
      <div className="w-full text-right inter-regular text-base">
        <Link to="../forgot-password">Forgot password?</Link>
      </div>
      <button
        className="bg-violet-500 rounded-[8px] h-12 text-white inter-semi-bold mt-2"
        type="submit"
      >
        Log in
      </button>
    </form>
  )
}
