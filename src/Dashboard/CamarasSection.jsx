import { Camera } from '@components/Camera.jsx'
import Styles from './camaraSection.module.css'

export function CamarasSection () {
  return (
    <section className={Styles.cameraContainer}>
      <h4 className={Styles.titleSection}>Camaras</h4>
      <ul className={Styles.listCamera}>
        <div className={Styles.rowUL}>
          <li>
            <Camera title='Patio' active />
          </li>
          <li>
            <Camera title='Cocina' active={false} />
          </li>
        </div>
        <div className={Styles.rowUL}>
          <li>
            <Camera title='Porton' active={false} />
          </li>
          <li>
            <Camera title='Azotea' active={false} />
          </li>
        </div>
      </ul>
    </section>
  )
}
