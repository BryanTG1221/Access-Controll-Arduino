import { BiTime } from 'react-icons/bi'
import Styles from './Camera.module.css'

export function Camera ({ title, active }) {
  return (
    <div className={active ? Styles.ContainerActive : Styles.container}>
      <div className={Styles.row}>
        <div className={Styles.img}>
          <img src='https://picsum.photos/200/300' alt='random' className={Styles.img} />
        </div>
        <div className={active ? Styles['overlay-active'] : Styles.overlay} />
      </div>
      <div className={Styles.containerTitle}>
        <p className={Styles.title}>{title}</p>
        <p className={Styles.timeTitle}>
          <span className={Styles.icon}>
            <BiTime />
          </span>
          6:00 AM - 7:00 AM
        </p>
      </div>
    </div>
  )
}
