import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const linkStyle = {
  marginRight: 5
}

const Header = () => (
  <header className="navbar">
    <nav className="container align-items-center">
      <div className="navbar-brand align-items-center has-text-centered">
        <a className="navbar-item m-auto" href="/">
          <img src="https://jatimnet.com/_nuxt/img/8c22f58.png" height="100"/>
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="control has-icons-left has-icons-right">
            <form method="get" action="https://jatimnet.com/cari">
              <input className="input is-rounded" type="text" name="q" placeholder="cari berita pilkada"/>
            </form>
            <span className="icon is-medium is-left">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
