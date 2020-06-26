import Head from 'next/head'
import Layout from '../components/layouts/Layout'

export default () => {
  return (
    <Layout>
      <div className="split-grid"> 
        <img src="/img/illustrations/community.svg" />

        <div>
          <h1>Join the Community!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          <div className="cta-buttons">
            <a className="btn btn-secondary" href="#" target="_blank">Join the Slack!</a>
            <a className="btn btn-info" href="#" target="_blank">Join the Discord!</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
