import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import { useAuth } from '../context/AuthContext.jsx'

import logo from '../assets/img/Group 5.png'
import loginCross from '../assets/img/login-cross.svg'
import formTick from '../assets/img/Form-Tick.svg'
import navImg from '../assets/img/nav-img.svg'
import gmail from '../assets/img/gmail.svg'
import facebook from '../assets/img/facebook.svg'
import twitter from '../assets/img/twitter.svg'
import tomettto from '../assets/img/tomettto.svg'
import headBorderImg from '../assets/img/head-border-img.svg'
import bringal from '../assets/img/Bringal.svg'
import mobileBg from '../assets/img/BG Mobile.png'
import mImgOne from '../assets/img/m-imgOne.svg'
import mImgTwo from '../assets/img/m-imgTwo.svg'
import doubleHand from '../assets/img/Double-hand.svg'
import touchImg from '../assets/img/touch-img.png'
import formEmoji from '../assets/img/form-emoji.svg'

export default function Signup() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (password.length < 4) {
      setError('Password must be at least 4 characters.')
      return
    }
    const result = signup({ name, email, password })
    if (!result.ok) {
      setError(result.error)
      return
    }
    navigate('/search')
  }

  return (
    <>
      <header className="mainNavbar shadow login">
        <nav className="navbar">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Bright Chef" />
          </Link>
        </nav>
      </header>

      <section className="header LoginHead signup">
        <div className="container">
          <div className="LoginPage">
            <div className="loginBox">
              <div className="boxHead">
                <h2>
                  Sign up <span>Now</span>
                </h2>
                <Link className="loginimg" to="/">
                  <img src={loginCross} alt="Close" />
                </Link>
              </div>
              <form className="BoxForm" onSubmit={handleSubmit}>
                {error && <p className="form-error">{error}</p>}
                <div className="formimg">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <img src={formTick} alt="" />
                </div>
                <div className="formimg">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <img src={formTick} alt="" />
                </div>
                <div className="formimg">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <img src={formTick} alt="" />
                </div>
                <button type="submit" className="NavBtn TouchFormBtn RememberBtn">
                  Sign up now
                  <img src={navImg} alt="" />
                </button>
              </form>
              <div className="BoxFooter">
                <p>Or log in with your social network </p>
                <div className="Loginicons">
                  <div className="licon">
                    <img src={gmail} alt="Google" />
                  </div>
                  <div className="licon">
                    <img src={facebook} alt="Facebook" />
                  </div>
                  <div className="licon">
                    <img src={twitter} alt="Twitter" />
                  </div>
                </div>
              </div>
              <div className="VimgOne">
                <img src={tomettto} alt="" />
              </div>
              <div className="VimgTwo">
                <img src={headBorderImg} alt="" />
              </div>
              <div className="VimgThree">
                <img src={bringal} alt="" />
              </div>
            </div>
            <p className="headerLink">
              Already have an account
              <Link to="/login"> Log in now!</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="mobile">
        <div className="container">
          <div className="mainMobile">
            <div className="mobile-rightSide">
              <img src={mobileBg} alt="" />
            </div>
            <div className="mobile-leftSide">
              <h1>
                Use on PC and MAC<span>or be mobile.</span>
              </h1>
              <p>
                Mobile applications offer the advantage of convenience, allowing users to perform tasks on-the-go,
                even without an internet connection, and providing a personalized user experience.
              </p>
              <div className="MobileButtons">
                <div className="MobileBtn">
                  <img src={mImgOne} alt="" />
                </div>
                <div className="MobileBtn">
                  <img src={mImgTwo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Touch">
        <div className="container">
          <div className="touchimgBG">
            <img src={touchImg} alt="" />
          </div>
          <div className="TouchContant">
            <h1>
              Get in touch <img src={doubleHand} alt="" />
            </h1>
            <form className="TouchForm" onSubmit={(e) => e.preventDefault()}>
              <input type="text" className="form-control" placeholder="Enter your name here..." />
              <input type="email" className="form-control formTwo" placeholder="Enter your email here..." />
              <textarea className="form-control formTextArea" placeholder="Your message..." rows="3"></textarea>
              <button type="submit" className="NavBtn TouchFormBtn">
                Send message
                <img src={formEmoji} alt="" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
