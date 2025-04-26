import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useModal } from '../hooks/useModal'
import Modal from './Modal'
import avatars from '../assets/ava/avatars'
import useAuthStore from '../store/userStore'
import { UserType } from '../types/UserType'
import { useNavigate } from 'react-router-dom'

type FormData = {
  nickName: string
  password: string
  confirmPassword: string
  avatar: FileList | null
  avatarUrl?: string
}

export default function FormSignUp() {
  const navigate = useNavigate()
  const { login } = useAuthStore()
  const { isOpen, openModal, closeModal } = useModal()
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    setError,
  } = useForm<FormData>()

  const password = watch('password')

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const avatar = data.avatar?.[0] || data.avatarUrl || null

    if (!avatar) {
      setError('avatar', { type: 'manual', message: 'Аватарка обовʼязкова' })
      return
    }

    const user: UserType = {
      name: data.nickName,
      // password: data.password,
      ava: data.avatarUrl || '',
      id: 1,
    }

    console.log('Submitted user:', user)
    localStorage.setItem('user', JSON.stringify(user))
    login(user)

    setAvatarPreview(null)
    setSelectedAvatar(null)
    setValue('avatar', null)
    setValue('avatarUrl', '')
    setValue('nickName', '')
    setValue('password', '')
    setValue('confirmPassword', '')
    navigate('/')
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setValue('avatar', e.target.files)
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAvatarClick = () => {
    if (selectedAvatar) {
      setAvatarPreview(selectedAvatar)
      setValue('avatar', null)
      setValue('avatarUrl', selectedAvatar)
    }
    closeModal()
  }

  const uploadFromComputer = () => {
    const fileInput = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement
    fileInput?.click()
    closeModal()
  }

  const inputClass =
    'h-10 w-full ps-4 border rounded-[8px] border-[#D9D9D9] focus:outline-none focus:border-[#5E53FF] '

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2 className="text-lg font-bold mb-4 poppins-semibold text-[22PX]">
          Select profile photo
        </h2>
        <div className="flex flex-wrap gap-4 bg-[#ececef] p-2 rounded-[8px] overflow-y-auto h-[481px]">
          {avatars.map((avatar: string) => (
            <img
              key={avatar}
              className={`cursor-pointer opacity-50 ${selectedAvatar === avatar ? 'opacity-90' : ''}`}
              src={avatar}
              alt="User Avatar"
              onClick={() => setSelectedAvatar(avatar)}
            />
          ))}
        </div>
        <button
          onClick={handleAvatarClick}
          className="mt-4 bg-[#909090] text-white px-6 py-3 rounded"
        >
          Install
        </button>
        <button
          onClick={uploadFromComputer}
          className="ms-4 mt-4 bg-green-500 text-white px-6 py-3 rounded"
        >
          Upload from Computer
        </button>
      </Modal>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-6 w-full px-6"
      >
        <div className="flex gap-2">
          {avatarPreview ? (
            <img
              src={avatarPreview}
              alt="Avatar Preview"
              className="mt-4 w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <div className="mt-4 w-24 h-24 rounded-full border border-[#D9D9D9] flex items-center justify-center text-sm text-center">
              <span className="text-[#909090]">No image selected</span>
            </div>
          )}

          <label className="poppins-regular text-sm text-[#909090] flex flex-col justify-center cursor-pointer">
            <input
              type="file"
              accept="image/*"
              {...register('avatar')}
              onChange={handleAvatarChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={openModal}
              className="text-[16px] text-[#4d5dfb]"
            >
              Select profile photo <br />
              <span className="text-[12px] text-[#888ca4]">
                It will be visible to all users
              </span>
            </button>

            {errors.avatar && (
              <p style={{ color: 'red' }}>{errors.avatar.message}</p>
            )}
          </label>
        </div>

        <input
          className={inputClass}
          {...register('nickName', {
            required: 'Nickname обовʼязковий',
            minLength: { value: 3, message: 'Мінімум 3 символи' },
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
            minLength: { value: 6, message: 'Мінімум 6 символів' },
          })}
          placeholder="Password"
        />
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password.message}</p>
        )}

        <input
          className={inputClass}
          type="password"
          {...register('confirmPassword', {
            required: 'Підтвердження паролю обовʼязкове',
            validate: (value) => value === password || 'Паролі не збігаються',
            minLength: { value: 6, message: 'Мінімум 6 символів' },
          })}
          placeholder="Confirm password"
        />
        {errors.confirmPassword && (
          <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>
        )}

        <button
          className="bg-violet-500 rounded-[8px] h-12 text-white inter-semi-bold mt-2"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </>
  )
}
