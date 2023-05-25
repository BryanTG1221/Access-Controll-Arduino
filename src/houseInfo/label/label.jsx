import { RiHome6Line } from 'react-icons/ri'
import { HiLocationMarker } from 'react-icons/hi'
import Styles from './label.module.css'
export function TitleHouse () {
  return (
    <div className={Styles.container}>
      <p className={Styles.title}>Mi casa <span className={Styles.iconHome}><RiHome6Line /></span></p>
      <p className={Styles.subTitle}>
        <span className={Styles.ascentIcon}>
          <HiLocationMarker />
        </span>
        Cerrada Solar #84 Zapopan Jalisco
      </p>
    </div>
  )
}
