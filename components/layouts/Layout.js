import Link from 'next/link'

export default ({ children }) => {
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
                <Link href="/contact">
                  <a className="nav-link">Contact</a>
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

      <div className="container py-5">
        {children}
      </div>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="copyright">
              <img src="/img/botgang/botgang-bottom.png" alt="Bot Gang Logo" />
              <br/>
              <small>&copy; 2020 Bot Gang. Created by <a href="https://www.calix.dev" target="_blank">Calix Huang</a>.</small>
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
                  <Link href="/contact">
                    <a>Contact</a>
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
                <a href="#" target="_blank">
                  <img src="/img/icons/slack.svg" />
                </a>
                <a href="#" target="_blank">
                  <img src="/img/icons/discord.svg" />
                </a>
                <a href="#" target="_blank">
                  <img src="/img/icons/github.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
