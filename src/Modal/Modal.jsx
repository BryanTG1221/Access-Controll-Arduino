import { useContext, useEffect, useState, useRef } from 'react'
import Styles from './Modal.module.css'
import LogoZT from '@assets/ztStudiosLogo.png'
import { toast } from 'react-hot-toast'
import { PasswordCTX } from '@context/Password'
export function ModalPasword () {
  const input1 = useRef(1)
  const input2 = useRef(2)
  const input3 = useRef(3)
  const input4 = useRef(4)
  const [, setPasswordState,, setEntrandingCarro] = useContext(PasswordCTX)
  const passwordList = {
    pin1: '1',
    pin2: '2',
    pin3: '2',
    pin4: '1'
  }
  const [pin1, setPin1] = useState('')
  const [pin2, setPin2] = useState('')
  const [pin3, setPin3] = useState('')
  const [pin4, setPin4] = useState('')
  const handleChangePIN1 = (event) => {
    const inputNumero = event.target.value
    if (/^[0-9]*$/.test(inputNumero) && inputNumero.length <= 1) {
      setPin1(inputNumero)
    }
  }
  const handleChangePIN2 = (event) => {
    const inputNumero = event.target.value
    if (/^[0-9]*$/.test(inputNumero) && inputNumero.length <= 1) {
      setPin2(inputNumero)
    }
  }
  const handleChangePIN3 = (event) => {
    const inputNumero = event.target.value
    if (/^[0-9]*$/.test(inputNumero) && inputNumero.length <= 1) {
      setPin3(inputNumero)
    }
  }
  const handleChangePIN4 = (event) => {
    const inputNumero = event.target.value
    if (/^[0-9]*$/.test(inputNumero) && inputNumero.length <= 1) {
      setPin4(inputNumero)
    }
  }
  useEffect(() => {
    if (pin1 === passwordList.pin1 && pin2 === passwordList.pin2 && pin3 === passwordList.pin3 && pin4 === passwordList.pin4) {
      fetch('http://127.0.0.1:9000/api/openPluma')
        .then(response => response.status === 200 ? toast.success('Cerrando Pluma', { icon: '⬇️', duration: 4000 }) : toast.error('Ups tenemos problemas'))
      setEntrandingCarro(true)
      toast.success('Carro Entrando', { duration: 7000 })
      setTimeout(() => {
        setPasswordState(false)
        setEntrandingCarro(false)
      }, 10000)
    }
  }, [pin1, pin2, pin3, pin4])

  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.contentPowered}>
          <img alt='ZT Studios logo' src={LogoZT} className={Styles.logo} />
          <div className={Styles.containerPIN}>
            <div className={Styles.containerInferior}>
              <p className={Styles.label}>!Bienvenido, Bryan</p>
              <p className={Styles.subLabel}>Ingrese el PIN de acceso</p>
            </div>
          </div>
        </div>
        <div className={Styles.containerList}>
          <input className={Styles.pinContainer} onChange={handleChangePIN1} onKeyUp={() => input2.current.focus()} ref={input1} type='text' value={pin1} />
          <input className={Styles.pinContainer} onChange={handleChangePIN2} onKeyUp={() => input3.current.focus()} ref={input2} type='text' value={pin2} />
          <input className={Styles.pinContainer} onChange={handleChangePIN3} onKeyUp={() => input4.current.focus()} ref={input3} type='text' value={pin3} />
          <input className={Styles.pinContainer} onChange={handleChangePIN4} ref={input4} type='text' value={pin4} />
        </div>
        <p className={Styles.logoLabel}>Powered by ZT Studios 1:1</p>
      </div>
    </div>
  )
}
