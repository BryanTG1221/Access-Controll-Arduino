import Styles from './Seguridad.module.css'
import { Cerradura } from '@components/Cerradura.jsx'
import { Battery } from '@components/Battery'

export function SeguridadSection () {
  return (
    <section className={Styles.container}>
      <h4 className={Styles.titleSection}>Seguridad</h4>
      <ul className={Styles.listUl}>
        <li className={Styles.itemLI}>
          <Cerradura action='Cerrada' title='Puerta Principal' />
          <Battery battery={100} />
        </li>
        <li className={Styles.itemLI}>
          <Cerradura action='Cerrada' title='Puerta Trasera' />
          <Battery battery={45} />
        </li>
      </ul>
    </section>
  )
}
