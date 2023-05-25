import { House } from './houseInfo/House'
import { ButtonCircle } from '@components/Button.jsx'
import { SideBar } from './SideBar'
import './styles/styles.css'

function App () {
  return (
    <div className='App'>
      <nav className='navContainer'>
        <House />
        <div className='navMenuButtons'>
          <ButtonCircle key='Notification' type='notification' />
          <ButtonCircle key='menu' type='menu' />
        </div>
      </nav>
      <SideBar />
    </div>
  )
}

export default App
