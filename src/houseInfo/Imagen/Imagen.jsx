import Styles from './Imagen.module.css'
import HouseTiny from '@assets/HouseTiny.png'
export function HouseImage () {
  return (
    <div className={Styles.container}>
      <img alt='cASA' src={HouseTiny} />
    </div>
  )
}
