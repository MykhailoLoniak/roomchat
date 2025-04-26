import { Link } from 'react-router-dom'

import Bell from './../../assets/icons/bell.svg'
import Logo from '../../assets/icons/Logo.svg'
import { UserIcon } from '../userIcon/UserIcon'
import { useHeaderController } from './header.controller'
import { styles } from './header.styles'

export const Header = () => {
  const { user, ava, roomTitle } = useHeaderController()

  return (
    <header
      className={`
        ${styles.header}
        ${!user ? 'justify-center' : 'justify-between px-10'}
      `}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.logoWrapper}>
          <img className="mt-[1px]" src={Logo} alt="Logo" />
        </Link>
        <div>
          <>
            {roomTitle ? (
              <>
                <span className={styles.roomTitle}>${roomTitle}</span> <br />
                <span className={styles.roomInfo}>
                  50 participants / 3 online
                </span>
              </>
            ) : (
              ''
            )}
          </>
        </div>
      </div>

      {user && (
        <div className={styles.rightBlock}>
          <img src={Bell} alt="Bell" />
          <UserIcon w="w-[40px]" h="h-[40px]" ava={ava} />
        </div>
      )}
    </header>
  )
}
