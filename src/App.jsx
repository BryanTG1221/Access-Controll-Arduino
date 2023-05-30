import { useContext } from 'react'
import { Dahsboard } from './Dashboard/Dashboard'
import { SideBar } from './SideBar'
import { PasswordCTX } from './context/Password'
import { ModalPasword } from './Modal/Modal'
import './styles/styles.css'

function App () {
  const [passwordState,, entrandingCarro] = useContext(PasswordCTX)

  return (
    <div className='App'>
      <Dahsboard />
      <SideBar />
      {
        passwordState && entrandingCarro === false ? <ModalPasword /> : false
      }
    </div>
  )
}

export default App
