import Styles from './Section.module.css'

export function SectionHome ({ title, estado }) {
  return (
    <section className={estado ? Styles.containerActive : Styles.containerOff}>
      <p className={Styles.label}>{title}</p>
    </section>
  )
}
