import Styles from './Cerradura.module.css'
import { VscLock } from 'react-icons/vsc'
import { IoIosArrowForward } from 'react-icons/io'
import CerraduraTiny from '@assets/CerraduraTiny.png'

export function Cerradura ({ title, action }) {
  return (
    <section className={Styles.container}>
      <div className={Styles.leftSide}>
        <div className={Styles.content}>
          <p className={Styles.titleSeguridad}>{title}</p>
          <p className={Styles.subtitleSeguridad}>{action}</p>
        </div>
        <div className={Styles.slider}>
          <div className={Styles.icon}>
            <VscLock />
          </div>
          <ul className={Styles.listArrows}>
            <li>
              <IoIosArrowForward />
            </li>
            <li>
              <IoIosArrowForward />
            </li>
            <li>
              <IoIosArrowForward />
            </li>
          </ul>
          <div className={Styles.icon}>
            <VscLock />
          </div>
        </div>
      </div>
      <img src={CerraduraTiny} className={Styles.imagenCerradura} />
    </section>
  )
}
