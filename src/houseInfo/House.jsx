import { HouseImage } from './Imagen/Imagen'
import { TitleHouse } from './label/label'
import Styles from './house.module.css'

export function House () {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <HouseImage />
        <TitleHouse />
      </div>
    </div>
  )
}
