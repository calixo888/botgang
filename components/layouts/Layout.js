import Link from 'next/link'

export default ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img src="/img/botgang/botgang-side.png" alt="Bot Gang Logo" />
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
      {children}
    </>
  )
}
