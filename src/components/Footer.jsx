import logo from '../assets/img/Group 5.png'
import footer1 from '../assets/img/footer1.svg'
import footer2 from '../assets/img/footer2.svg'
import footer3 from '../assets/img/footer3.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerData">
          <div className="footerimglogo">
            <img src={logo} alt="Bright Chef" />
          </div>
          <div className="footercontant">
            <p><a className="link-reset" href="#how-it-work">How it work</a></p>
            <p><a className="link-reset" href="#testimonials">Testimonials</a></p>
            <p><a className="link-reset" href="#about">About</a></p>
            <p><a className="link-reset" href="#contact">Contact</a></p>
          </div>
          <div className="footericons">
            <span>Follow us</span>
            <div className="footerimages">
              <a className="footerimg" href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={footer1} alt="Facebook" />
              </a>
              <a className="footerimg" href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src={footer2} alt="Twitter" />
              </a>
              <a className="footerimg" href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src={footer3} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
        <span className="f-text">© Copyright {new Date().getFullYear()} Bright Chef All Rights Reserved.</span>
      </div>
    </footer>
  )
}
