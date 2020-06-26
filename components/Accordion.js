import styles from '../styles/modules/accordion.module.scss'

export default ({ title, content }) => {
  const extend = (e) => {
    const panel = e.target.parentNode.nextSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  return (
    <div className={styles.accordion}>
      <div onClick={extend} className={styles.accordionHeader}>
        <h4>
          {title}
        </h4>
      </div>
      <div className={styles.panel}>
        <br/>
        <p>{content}</p>
      </div>
    </div>
  )
}
