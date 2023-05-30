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

setInterval(() => {
  for (let i = 0; i < 10; i++) {
    document.querySelector('#formPregunta > div:nth-child(7) > select').value = 3
    document.querySelector('#formPregunta > div:nth-child(14) > select').value = 1
    document.querySelector('#formPregunta > div:nth-child(21) > select').value = 5
    document.querySelector('#formPregunta > div:nth-child(28) > select').value = 5
    document.querySelector('#formPregunta > div:nth-child(35) > select').value = 5
    document.querySelector('#formPregunta > div:nth-child(42) > select').value = 5
    document.querySelector('#formPregunta > div:nth-child(49) > select').value = 5
    document.querySelector('#formPregunta > div.d-flex.flex-row.mb-1 > div > div.action > button.btn.app-btn-primary.siguiente-pregunta').click()
  }
}, 2000)
