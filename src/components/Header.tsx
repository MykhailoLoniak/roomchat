import { Link, useParams } from 'react-router-dom'
import userStore from '../store/userStore'

import Bell from '../assets/icons/bell.png'
import Logo from '../assets/icons/Logo.png'
import { UserIcon } from './UserIcon'

export const Header = () => {
  const { user } = userStore()

  const params = useParams()
  const { roomTitle } = params

  return (
    <header
      className={`
          flex  bg-[#FAD0E3] h-20
          ${!user ? ' justify-center' : 'justify-between px-10'}
        `}
    >
      <div className={`min-h-[40px] flex items-center gap-3`}>
        <Link to={'/'} className="flex items-center">
          <img className="mt-[1px]" src={Logo} alt="Logo" />
        </Link>
        <div>
          <span className="text-[#5E53FF] poppins-semibold text-[30px]">
            {roomTitle ? ` ${roomTitle}` : ''}
          </span>
          <br />
          <span className="text-[#888ca4] inter-regular text-4">
            50 participants / 3 online
          </span>
        </div>
      </div>

      {user && (
        <div className="flex items-center gap-4">
          <img src={Bell} alt="Bell" />
          <UserIcon w={'w-[40px]'} h={'h-[40px]'} />
        </div>
      )}
    </header>
  )
}
