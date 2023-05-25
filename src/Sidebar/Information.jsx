import Styles from './Information.module.css'

export function Information () {
  return (
    <div className={Styles.container}>
      <h1 className={Styles['title-big']}>Casa inteligente</h1>
      <h2 className={Styles['title-medium']}>Sistemas de seguridad</h2>
      <h3 className={Styles['title-medium']}>a tus manos</h3>
    </div>
  )
}
