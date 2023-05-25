import Styles from './styles/Sidebar.module.css'
import { UserInfo } from './Sidebar/infoUser'
import { User } from './Sidebar/User'
import { Information } from './Sidebar/Information'
import { Miembros } from './Sidebar/Miembros'
import { Rutinas } from './Sidebar/Rutinas'

export function SideBar () {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <UserInfo />
        <User />
      </div>
      <Information />
      <Miembros />
      <Rutinas />
    </div>
  )
}
