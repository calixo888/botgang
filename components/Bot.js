import Link from 'next/link'
import Tag from './Tag'
import styles from '../styles/modules/bot.module.scss'

export default ({ data }) => {

  return (
    <Link href={data.path}>
      <div className={styles.bot}>
        <img src={data.image} alt={data.name} />
        <div>
          <h3>{data.name}</h3>
          <p>{data.description}</p>

          {data.tags.map((tag, key) => {
            return <Tag type={tag} />
          })}
        </div>
      </div>
    </Link>
  )
}
