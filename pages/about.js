import Head from 'next/head'
import Layout from '../components/layouts/Layout'

export default () => {
  return (
    <Layout>
      <div className="about-grid">
        <img className="calix-picture" src="/img/people/calix.png" alt="Calix Huang" />

        <div>
          <h1>Calix Huang</h1>
          <p className="mb-2"><strong>Founder, Lead Engineer</strong></p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="social-icons">
            <a href="#" target="_blank">
              <img src="/img/icons/facebook.svg" />
            </a>
            <a href="#" target="_blank">
              <img src="/img/icons/instagram.svg" />
            </a>
            <a href="#" target="_blank">
              <img src="/img/icons/linkedin.svg" />
            </a>
            <a href="#" target="_blank">
              <img src="/img/icons/github.svg" />
            </a>
            <a href="#" target="_blank">
              <img src="/img/icons/email.svg" />
            </a>
            <a href="#" target="_blank">
              <img src="/img/icons/website.svg" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
