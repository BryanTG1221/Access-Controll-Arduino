import Styles from './infoUser.module.css'
import { BiSun } from 'react-icons/bi'

export function UserInfo () {
  return (
    <button className={Styles.container}>
      <div className={Styles.containerIcon}>
        <BiSun className={Styles.icon} />
      </div>
    </button>
  )
}
