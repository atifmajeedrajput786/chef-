import { Link, useLocation } from 'react-router-dom'
import dropdownImg from '../assets/img/dropdown-img.png'
import whiteArrow from '../assets/img/white arrow.svg'
import { useAuth } from '../context/AuthContext.jsx'

const LINKS = [
  { label: 'Miracle of creation', to: '/search' },
  { label: 'Favorites', to: '/search' },
  { label: 'History', to: '/history' },
  { label: 'Settings', to: '/setting' },
]

export default function DashNav() {
  const location = useLocation()
  const { logout } = useAuth()

  return (
    <div className="SearchNavBar">
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0">
            {LINKS.map((l) => (
              <li className="nav-item" key={l.label}>
                <Link className={`nav-link${location.pathname === l.to ? ' active' : ''}`} aria-current="page" to={l.to}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="DropDownImg">
            <img src={dropdownImg} alt="" />
            <div className="dropdown">
              <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={whiteArrow} alt="" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/setting">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <button type="button" className="dropdown-item" onClick={logout}>
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
