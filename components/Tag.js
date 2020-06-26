import styles from '../styles/modules/tags.module.scss'

export default ({ type }) => {
  return (
    <span className={styles.tag}>
      {type == "slack" ?
        <span><img src="/img/icons/slack.png" /> Slack</span>
        :
        <span><img src="/img/icons/discord.png" /> Discord</span>
      }
    </span>
  )
}
