import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layouts/Layout'

export default () => {
  return (
    <Layout>
      <div className="about-grid">
        <img className="calix-picture" src="/img/people/calix.png" alt="Calix Huang" />

        <div>
          <h1>Calix Huang</h1>
          <p className="mb-2"><strong>The Gang Leader</strong></p>
          <p>
            My name's Calix Huang, and I'm the Gang Leader. Whatever I say, goes. No questions, no comments, no concerns. I'm the baddest of the bad, the edgiest of the edgy. No one ever talks to me without shedding a single tear, and no one ever leaves my sight without mental trauma. I am the epitome of intimidation, and that's the way it shall stay.
          </p>
          <p>
            If you want in to the Bot Gang, you'll have to go through me first. No free rides, no participation awards, and <strong>no wimps</strong>. We are here to take over, and we don't want softies in the gang to slow us down. If you truly think you can handle the Bot Gang, <Link href="/contact">
              <a>send us a message</a>
            </Link>, and I'll consider giving you a shot.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/calix.huang.904" target="_blank">
              <img src="/img/icons/facebook.svg" />
            </a>
            <a href="https://www.instagram.com/calix_huang/" target="_blank">
              <img src="/img/icons/instagram.svg" />
            </a>
            <a href="https://www.linkedin.com/in/calix-huang/" target="_blank">
              <img src="/img/icons/linkedin.svg" />
            </a>
            <a href="https://github.com/calixo888" target="_blank">
              <img src="/img/icons/github.svg" />
            </a>
            <a href="mailto:calix@botgang.tech" target="_blank">
              <img src="/img/icons/email.svg" />
            </a>
            <a href="https://www.calix.dev/" target="_blank">
              <img src="/img/icons/website.svg" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
