import { House } from '../houseInfo/House'
import { ButtonCircle } from '@components/Button.jsx'
import { CamarasSection } from './CamarasSection'
import { SeguridadSection } from './Seguridad'
import { NavigationSection } from './NavigationSection'
import House3D from '@assets/houseMain.png'
import Styles from './Dashboard.module.css'

export function Dahsboard () {
  return (
    <main className={Styles.main}>
      <nav className={Styles.navContainer}>
        <House />
        <div className={Styles.navMenuButtons}>
          <ButtonCircle key='Notification' type='notification' />
          <ButtonCircle key='menu' type='menu' />
        </div>
      </nav>
      <div className={Styles.contentMain}>
        <section className={Styles.sectionLeft}>
          <CamarasSection />
          <SeguridadSection />
        </section>
        <section className={Styles.containerHouse3D}>
          <NavigationSection />
          <img alt='imagen' src={House3D} />
        </section>
      </div>
    </main>

  )
}
