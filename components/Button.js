import Link from 'next/link'
import styles from '../styles/modules/button.module.scss'

export default ({ link, text, type }) => {
  return (
    <Link href={link}>
      <a className={type == "solid" ? styles.solidButton : styles.ghostButton}>{text}</a>
    </Link>
  )
}
