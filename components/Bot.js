import Link from 'next/link'
import styles from '../styles/modules/bot.module.scss'

export default ({ data }) => {

  return (
    <Link href={data.path}>
      <div className={styles.bot}>
        <img src={data.image} alt={data.name} />
        <div>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </div>
      </div>
    </Link>
  )
}
