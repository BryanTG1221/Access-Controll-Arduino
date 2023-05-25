import Styles from './Miembros.module.css'

export function Miembros () {
  return (
    <section className={Styles.container}>
      <h4>Miembros</h4>
      <ul style={{ listStyle: 'none' }} className={Styles.content}>
        <li>
          <img src='https://api.dicebear.com/6.x/bottts-neutral/svg?seed=Missy' className={Styles.userIcon} />
        </li>
        <li>
          <img src='https://api.dicebear.com/6.x/bottts-neutral/svg?seed=Bob' className={Styles.userIcon} />
        </li>
        <li>
          <img src='https://api.dicebear.com/6.x/bottts-neutral/svg?seed=Sugar' className={Styles.userIcon} />
        </li>
        <li>
          <img src='https://api.dicebear.com/6.x/bottts-neutral/svg?seed=Tigger' className={Styles.userIcon} />
        </li>
      </ul>
    </section>
  )
}
