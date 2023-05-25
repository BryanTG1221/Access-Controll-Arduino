import Styles from './Modal.module.css'
import LogoZT from '@assets/ztStudiosLogo.png'
export function ModalPasword () {
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
          <input className={Styles.pinContainer} />
          <input className={Styles.pinContainer} />
          <input className={Styles.pinContainer} />
          <input className={Styles.pinContainer} />
        </div>
        <p className={Styles.logoLabel}>Powered by ZT Studios 1:1</p>
      </div>
    </div>
  )
}
