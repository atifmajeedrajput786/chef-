import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { pricingPlans } from '../data/pricingData.js'
import { useAuth } from '../context/AuthContext.jsx'

import handImg from '../assets/img/hand.svg'
import mark from '../assets/img/mark.svg'
import formTick from '../assets/img/Form-Tick.svg'
import sideTag from '../assets/img/SideTag.png'
import headBorderImg from '../assets/img/head-border-img.svg'
import tomatoOnion from '../assets/img/Tomato-Onion.svg'

const TOKEN_GRANTS = { Free: 3, 'Sous Chef': 30, 'Bright Chef': 999 }

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const { user, setTokens } = useAuth()
  const navigate = useNavigate()
  const plans = pricingPlans[billing]

  function selectPlan(plan) {
    setTokens(TOKEN_GRANTS[plan.name] ?? 3)
    navigate(user ? '/search' : '/signup')
  }

  return (
    <>
      <Navbar />

      <section className="PricingContant">
        <div className="container">
          <div className="TopMainContant">
            <div className="TopHeading">
              <h1>
                Please select <span>subscription plan</span>
              </h1>
              <img src={handImg} alt="" />
            </div>
            <div className="PricingButton">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link${billing === 'monthly' ? ' active' : ''}`}
                    type="button"
                    role="tab"
                    aria-selected={billing === 'monthly'}
                    onClick={() => setBilling('monthly')}
                  >
                    Monthly billing
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link${billing === 'annual' ? ' active' : ''}`}
                    type="button"
                    role="tab"
                    aria-selected={billing === 'annual'}
                    onClick={() => setBilling('annual')}
                  >
                    Annual billing
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" role="tabpanel">
                  <p>
                    <img src={mark} alt="" />
                    Choose <span>annual billing</span> and get 2 month free every year
                  </p>
                  <div className="PricingBoxes">
                    {plans.map((plan) => (
                      <div className="MainPricingBox" key={plan.name}>
                        <div className="PricingBox">
                          <h4>{plan.name}</h4>
                          <h2>
                            {plan.price}
                            <span>{plan.period}</span>
                          </h2>
                          <h6>{plan.tokens}</h6>
                          <div className="imageContant">
                            {plan.features.map((f) => (
                              <div className="ContantLines" key={f}>
                                <img src={formTick} alt="" />
                                <h3>{f}</h3>
                              </div>
                            ))}
                          </div>
                          {plan.tag && (
                            <div className="TagImage">
                              <img src={sideTag} alt="" />
                            </div>
                          )}
                        </div>
                        <button type="button" className="NavBtn PricingBoxButton" onClick={() => selectPlan(plan)}>
                          select plan
                        </button>
                      </div>
                    ))}
                    <div className="BoxLeftimg">
                      <img src={headBorderImg} alt="" />
                    </div>
                    <div className="BoxRightimg">
                      <img src={tomatoOnion} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
