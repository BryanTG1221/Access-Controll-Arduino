import { MdOutlineNotifications } from 'react-icons/md'
import { CgMenuGridO } from 'react-icons/cg'
import Styles from '@styles/Button.module.css'

export function ButtonCircle ({ type }) {
  console.log(type)
  return (
    <button className={Styles.container}>
      {
        type === 'notification' ? <MdOutlineNotifications className={Styles.icon} /> : <CgMenuGridO className={Styles.icon} />
      }
    </button>
  )
}
