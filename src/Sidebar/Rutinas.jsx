import Styles from './Rutinas.module.css'

export function Rutinas () {
  return (
    <section className={Styles.container}>
      <h4>Rutinas</h4>
      <ul className={Styles.listUL}>
        <li className={Styles.content}>
          <p className={Styles.titleCard}>10:00 PM</p>
          <div className={Styles.containerRutina}>
            <div className={Styles.contentRutina}>
              <h4 className={Styles.titleRutina}>General</h4>
              <p className={Styles.subtitleRutina}>Cerrar la puerta principal</p>
            </div>
          </div>
        </li>
        <li className={Styles.content}>
          <p className={Styles.titleCard}>12:00 AM</p>
          <div className={Styles.containerRutina2}>
            <div className={Styles.contentRutina}>
              <h4 className={Styles.titleRutina}>Patio</h4>
              <p className={Styles.subtitleRutina}>Enciende la alarma de seguridad</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}
