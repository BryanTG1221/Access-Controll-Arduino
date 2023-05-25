import Styles from './Battery.module.css'

export function Battery ({ battery }) {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <p className={Styles.label}>{battery}%</p>
        <div className={battery < 50 ? Styles.batteryMedium : Styles.batteryPorcentaje} />
      </div>
    </div>
  )
}
