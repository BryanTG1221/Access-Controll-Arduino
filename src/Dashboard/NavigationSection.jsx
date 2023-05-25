import { SectionHome } from '@components/Section'
import Styles from './NavigationSection.module.css'

export function NavigationSection () {
  return (
    <ul className={Styles.container}>
      <li>
        <SectionHome title='Home' estado />
      </li>
      <li>
        <SectionHome title='Superior' />
      </li>
      <li>
        <SectionHome title='Inferior' />
      </li>
      <li>
        <SectionHome title='Garaje' />
      </li>
    </ul>
  )
}
