import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Carousel from '../components/Carousel.jsx'
import {
  heroSlides,
  heroDecor,
  cuisineTabs,
  sampleDishes,
  thinkingItems,
  testimonials,
  testimonialQuote,
  receiptSteps,
} from '../data/homeData.js'

import mobileBg from '../assets/img/BG Mobile.png'
import mImgOne from '../assets/img/m-imgOne.svg'
import mImgTwo from '../assets/img/m-imgTwo.svg'
import mobileCover from '../assets/img/BG-Mobile-Cover.png'
import handImg from '../assets/img/hand.svg'
import foodStar from '../assets/img/foodStar.svg'
import leftArrow from '../assets/img/Left-Arrow.svg'
import rightArrow from '../assets/img/Right-Arrow.svg'
import lastArrow from '../assets/img/last-arrow.svg'
import reviewStars from '../assets/img/Review_stars.svg'
import arrowLeftSvg from '../assets/img/arrow-left.svg'
import arrowRightSvg from '../assets/img/arrow-right.svg'
import doubleHand from '../assets/img/Double-hand.svg'
import group232 from '../assets/img/Group 232.png'
import touchImg from '../assets/img/touch-img.png'
import formEmoji from '../assets/img/form-emoji.svg'

function DishCard({ dish }) {
  return (
    <div className="SimSliderIMG">
      <div className="sliderImge">
        <img src={dish.image} alt={dish.title} />
      </div>
      <p>{dish.cuisine}</p>
      <div className="LowerContant">
        <h6>{dish.title}</h6>
        <a href="#recipe">
          <img src={foodStar} alt="" />
          {dish.rating}
        </a>
      </div>
    </div>
  )
}

export default function Home() {
  const [activeCuisine, setActiveCuisine] = useState(cuisineTabs[0].key)
  const [activeThinking, setActiveThinking] = useState(0)
  const dishSliderRef = useRef(null)
  const testimonialRef = useRef(null)
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState({ name: '', email: '', message: '' })
  const [contactSent, setContactSent] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (email.trim()) {
      setEmail('')
      alert('Thanks for signing up! Check your inbox for updates.')
    }
  }

  function handleContact(e) {
    e.preventDefault()
    setContactSent(true)
    setContact({ name: '', email: '', message: '' })
    setTimeout(() => setContactSent(false), 4000)
  }

  return (
    <>
      <Navbar />

      <section className="header">
        <div className="setArrows">
          <div className="container">
            <div className="MainSliderChief">
              {heroSlides.map((slide, i) => (
                <div className="mainHead" key={i}>
                  <div className="leftSide">
                    <h1>
                      {slide.title.split('\n').map((line, idx) => (
                        <span key={idx} style={idx > 0 ? {} : undefined}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </h1>
                    <div className="HeaderBttons">
                      <Link className="headButton" to="/signup">
                        Sign up now <img src={heroDecor.headBorderImg} alt="" style={{ display: 'none' }} />
                      </Link>
                      <span>or use</span>
                      <a className="h-link" href="#social">
                        your social and signup faster.
                      </a>
                    </div>
                  </div>
                  <div className="rightSide">
                    <img src={slide.image} alt="" />
                    <div className="imgOne">
                      <img src={heroDecor.headBtnImg} alt="" />
                    </div>
                    <div className="imgTwo">
                      <img src={heroDecor.tomettto} alt="" />
                    </div>
                    <div className="imgThree">
                      <img src={heroDecor.headBorderImg} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="headerFoot">
              <div className="f-contant">
                <div className="fimg">
                  <img src={heroDecor.rectangleImg} alt="" />
                </div>
                <p>{heroSlides[0].dish}</p>
              </div>
              <div className="ftext">
                <p>Scroll to know more</p>
              </div>
            </div>
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

      <section className="working" id="how-it-work">
        <div className="container">
          <div className="mainContant">
            <div className="workingLeft">
              <h1>
                How it work?<span>Let's check now.</span>
              </h1>
              <p className="para One">
                Our application is the best for receipts creation because it offers a multitude of user-friendly
                features that make creating, managing, and sharing receipts a breeze.
              </p>
              <div className="bgImage">
                <img src={mobileCover} alt="" />
              </div>
              <p className="para Two">
                With our intuitive interface, users can easily input all necessary details for each transaction,
                including merchant name, date, time, items purchased, and price. Our smart software automatically
                calculates taxes, tips, and discounts, ensuring accuracy and saving time. Users can also upload
                images of paper receipts for safekeeping and easy reference.
              </p>
            </div>
            <div className="workingRight">
              <ul className="nav nav-tabs" role="tablist">
                {cuisineTabs.map((tab) => (
                  <li className="nav-item" role="presentation" key={tab.key}>
                    <button
                      className={`nav-link${activeCuisine === tab.key ? ' active' : ''}`}
                      type="button"
                      role="tab"
                      aria-selected={activeCuisine === tab.key}
                      onClick={() => setActiveCuisine(tab.key)}
                    >
                      <h6>
                        <div className="NavImg">
                          <img src={tab.icon} alt="" />
                        </div>
                        {tab.label}
                      </h6>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" role="tabpanel" tabIndex={0}>
                  <div className="SliderImages">
                    <Carousel ref={dishSliderRef} slidesToShow={2} key={activeCuisine} className="sliderimages">
                      {sampleDishes.map((dish, i) => (
                        <DishCard dish={dish} key={i} />
                      ))}
                    </Carousel>
                    <div className="workingContant">
                      <div className="workingArrow d-lg-flex d-none">
                        <button type="button" className="Arrow wLeft" onClick={() => dishSliderRef.current?.slickPrev()}>
                          <img src={leftArrow} alt="Previous" />
                        </button>
                        <button type="button" className="Arrow wRight" onClick={() => dishSliderRef.current?.slickNext()}>
                          <img src={rightArrow} alt="Next" />
                        </button>
                      </div>
                      <div className="MR-contant">
                        <Link to="/search">
                          More receipts <img src={lastArrow} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="receipts">
        <div className="container">
          <div className="receiptsTop">
            <h1>
              Howto start?<span>3 easy steps.</span>
            </h1>
            <img src={handImg} alt="" />
          </div>
          <div className="receiptsBoxes">
            {receiptSteps.map((step, i) => (
              <div className="receiptsBox" key={i}>
                <div className="r-image">
                  <img src={step.image} alt="" />
                </div>
                <h1>
                  {step.title.split('\n').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < step.title.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </h1>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="receiptsBottom">
          <div className="R-contant">
            <h1>Interesting in our receipts?</h1>
            <Link className="R-Button" to="/signup">
              Let's sign up now
            </Link>
          </div>
        </div>
      </section>

      <section className="customers-review" id="testimonials">
        <div className="container">
          <h1>
            What our customers<span>says about us!</span>
          </h1>
          <div className="customersBoxes">
            <Carousel ref={testimonialRef} slidesToShow={4} className="customersBoxes-inner">
              {testimonials.map((t, i) => (
                <div className="customersBox" key={i}>
                  <div className="customerIMG">
                    <img src={t.icon} alt="" />
                  </div>
                  <h2>{t.name}</h2>
                  <p>{testimonialQuote}</p>
                  <div className="R-Stars">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <img src={reviewStars} alt="" key={s} />
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="Arrows-Customers d-lg-flex d-none">
            <button type="button" className="Arrow LeftCustomer" onClick={() => testimonialRef.current?.slickPrev()}>
              <img src={arrowLeftSvg} alt="Previous" />
            </button>
            <button type="button" className="Arrow RifgtCustomer" onClick={() => testimonialRef.current?.slickNext()}>
              <img src={arrowRightSvg} alt="Next" />
            </button>
          </div>
        </div>
      </section>

      <section className="thinking" id="about">
        <div className="container">
          <h1>
            And what we are exactly thinking <span>about all of these things.</span>
          </h1>
          <div className="d-flex align-items-start justify-content-between for-mobile">
            <div className="nav flex-column nav-pills Thinking50W" role="tablist" aria-orientation="vertical">
              {thinkingItems.map((item, i) => (
                <button
                  key={i}
                  className={`nav-link${activeThinking === i ? ' active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={activeThinking === i}
                  onClick={() => setActiveThinking(i)}
                >
                  <div className="thingBox">
                    <div className="thinking-img">
                      <img src={item.icon} alt="" />
                    </div>
                    <div className="boxContant">
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="tab-content Thinking50W">
              <div className="tab-pane fade show active" role="tabpanel" tabIndex={0}>
                <div className="thinkingBG">
                  <div className="thinking-imageShow">
                    <img src={thinkingItems[activeThinking].image} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Satisfaction">
        <div className="container">
          <div className="MainSatisfaction">
            <div className="leftSatisfaction">
              <h1>
                Sign Up for<span> Perfect Satisfaction</span>
                of taste. Enjoy!
              </h1>
              <form className="SatisfactionForm" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email here..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="NavBtn SatisfactionBtn">
                  And sign up
                  <img src={doubleHand} alt="" />
                </button>
              </form>
            </div>
            <div className="rightSatisfaction">
              <img src={group232} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="Touch" id="contact">
        <div className="container">
          <div className="touchimgBG">
            <img src={touchImg} alt="" />
          </div>
          <div className="TouchContant">
            <h1>
              Get in touch <img src={doubleHand} alt="" />
            </h1>
            <form className="TouchForm" onSubmit={handleContact}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name here..."
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
                required
              />
              <input
                type="email"
                className="form-control formTwo"
                placeholder="Enter your email here..."
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                required
              />
              <textarea
                className="form-control formTextArea"
                placeholder="Your message..."
                rows="3"
                value={contact.message}
                onChange={(e) => setContact({ ...contact, message: e.target.value })}
                required
              ></textarea>
              <button type="submit" className="NavBtn TouchFormBtn">
                {contactSent ? 'Message sent!' : 'Send message'}
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
