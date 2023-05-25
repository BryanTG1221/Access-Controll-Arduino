import Styles from './User.module.css'
import AvatarIMG from '@assets/avatar.jpg'

export function User () {
  return (
    <div className={Styles.container}>
      <div className={Styles.containerAvatar}>
        <img alt='Avatar' src={AvatarIMG} />
      </div>
      <p>Bryan Turrubiates</p>
    </div>
  )
}
