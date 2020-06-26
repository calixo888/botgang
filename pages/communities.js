import Head from 'next/head'
import Layout from '../components/layouts/Layout'
import Button from '../components/Button'
import styles from '../styles/modules/button.module.scss'

export default () => {
  return (
    <Layout>
      <Head>
        <title>Bot Gang - Our Community</title>
        <meta name="description" content="Join a community of bot developers, hang out with the Bot Gang, and learn new things, as well as play around with the bots that we currently have!" />
        <meta name="keywords" content="Bot, Bot Gang, Community, Developer" />
      </Head>
      <div className="split-grid">
        <img src="/img/illustrations/community.svg" />

        <div>
          <h1>Join the Community!</h1>
          <p>
            We don't just let anyone into the Bot Gang, but for you, I'll make an exception. We gots a Slack workspace and a Discord server that you can join filled with wannabe Bot Gang members, just maybe, I'll give you a shot to prove your worthiness once you join. But that's only if you got the guts to do so.
          </p>
          <p>
            If you really want to be taken seriously, join the crew, and we'll make you into the coolest gangster anyone's ever seen.
          </p>

          <div className="cta-buttons">
            <a className={styles.ghostButton} href="#" target="_blank">Join the Discord!</a>
            <a className={styles.solidButton} href="https://join.slack.com/t/thebotgang/shared_invite/zt-fl8gglht-sdbVixugoR4mJZ2QToLb_g" target="_blank">Join the Slack!</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
