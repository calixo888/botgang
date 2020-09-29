import React, { useEffect } from 'react'
import Link from 'next/link'
import { initGA, logPageView } from '../../middleware/analytics.js'

export default ({ children }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  });

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img style={{ width: "200px" }} src="/img/botgang/botgang-side.png" alt="Bot Gang Logo" />
            </a>
          </Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-target">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-target">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/bots">
                  <a className="nav-link">Bots</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/communities">
                  <a className="nav-link">Communities</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container pt-4 pb-5">
        {children}
      </div>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="copyright">
              <img src="/img/botgang/botgang-bottom.png" alt="Bot Gang Logo" />
              <br/>
              <small>&copy; 2020 <a href="https://launchtechllc.com" target="_blank">Launch Tech LLC</a>. All rights reserved.</small>
            </div>
            <div>
              <h3>Navigate</h3>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/bots">
                    <a>Bots</a>
                  </Link>
                </li>
                <li>
                  <Link href="/communities">
                    <a>Communities</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>Legal</h3>
              <ul>
                <li>
                  <Link href="/legal/terms-of-service">
                    <a>Terms of Service</a>
                  </Link>
                </li>
                <li>
                  <Link href="/legal/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>Connect with us!</h3>
              <div className="social-icons">
                <a href="https://join.slack.com/t/thebotgang/shared_invite/zt-fl8gglht-sdbVixugoR4mJZ2QToLb_g" target="_blank">
                  <img src="/img/icons/slack.svg" />
                </a>
                <a href="https://discord.gg/WRkzxBB" target="_blank">
                  <img src="/img/icons/discord.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
