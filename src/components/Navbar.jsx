import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/img/Group 5.png'
import navImg from '../assets/img/nav-img.svg'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="mainNavbar shadow">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Bright Chef" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${open ? ' show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <div className="LogoExtraToogle d-sm-block d-md-block d-lg-none">
              <img src={logo} alt="Bright Chef" />
            </div>
            <li className="nav-item">
              <a className="nav-link" href="#how-it-work">How it work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <div className="navButton">
            <Link className="NavBtn A-Btn" to="/signup">
              Get Access <img src={navImg} alt="" />
            </Link>
            <Link className="NavBtn" to="/search">
              Launch app
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
