import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/Group 5.png'
import coins from '../assets/img/coins.svg'
import mark from '../assets/img/mark.svg'
import slideDown from '../assets/img/Slide Down Arrow.svg'
import t1 from '../assets/img/t1.svg'
import t2 from '../assets/img/t2.svg'
import t3 from '../assets/img/t3.svg'
import t4 from '../assets/img/t4.svg'
import t5 from '../assets/img/t5.svg'
import doubleArrow from '../assets/img/Double Arrow.svg'
import { useAuth } from '../context/AuthContext.jsx'

const CUISINES = [
  { label: 'All world', icon: t1 },
  { label: 'TAI', icon: t2 },
  { label: 'ITALIAN', icon: t3 },
  { label: 'JAPANISE', icon: t4 },
  { label: 'AMERICAN', icon: t5 },
]

const DIFFICULTIES = ['Easy', 'NORMAL', 'HARD']

export default function DashSidebar({ mobileButtonId, onMobileToggle }) {
  const { tokens } = useAuth()
  const [cuisine, setCuisine] = useState(CUISINES[0])
  const [difficulty, setDifficulty] = useState(DIFFICULTIES[0])
  const [calories, setCalories] = useState(500)
  const [cookTime, setCookTime] = useState(90)
  const [serving, setServing] = useState(2)

  function resetDefaults() {
    setCuisine(CUISINES[0])
    setDifficulty(DIFFICULTIES[0])
    setCalories(500)
    setCookTime(90)
    setServing(2)
  }

  return (
    <div className="Search-LeftSide">
      <div className="searchInner">
        <div className="SearchLogo">
          <Link to="/">
            <img src={logo} alt="Bright Chef" />
          </Link>
        </div>
        {mobileButtonId && (
          <button className="ButtonDB d-block d-sm-none" id={mobileButtonId} onClick={onMobileToggle}>
            {' '}
            Dash Bord
          </button>
        )}
        <div className="DashBoardBtn">
          <div className="SearchBox">
            <div className="Search-Valueimage">
              <p>{tokens}</p>
              <div className="coinimage">
                <img src={coins} alt="" />
              </div>
              <div className="markimage">
                <img src={mark} alt="" />
              </div>
            </div>
            <div className="SearchButton">
              <Link to="/pricing">Upgrade</Link>
            </div>
          </div>

          <div className="CoinsTypeBox">
            <h5>
              Select cousine type <img src={mark} alt="" />
            </h5>
            <div className="dropdown">
              <button className="DropDownButton dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="Map">
                  <img src={cuisine.icon} alt="" /> {cuisine.label}
                </div>
                <div className="SlideArrow">
                  <img src={slideDown} alt="" />
                </div>
              </button>
              <ul className="dropdown-menu">
                {CUISINES.map((c) => (
                  <li key={c.label}>
                    <button type="button" className="dropdown-item" onClick={() => setCuisine(c)}>
                      <img src={c.icon} alt="" />
                      {c.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="CoinsTypeBox">
            <h5>
              Difficulty<img src={mark} alt="" />
            </h5>
            <div className="dropdown">
              <button className="DropDownButton dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="Map">{difficulty}</div>
                <div className="SlideArrow">
                  <img src={slideDown} alt="" />
                </div>
              </button>
              <ul className="dropdown-menu">
                {DIFFICULTIES.map((d) => (
                  <li key={d}>
                    <button type="button" className="dropdown-item" onClick={() => setDifficulty(d)}>
                      {d}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="CaloriesQuantity CoinsTypeBox">
            <h5>
              Calories quantity<img src={mark} alt="" />
            </h5>
            <div
              className="Percentage"
              role="button"
              tabIndex={0}
              title="Click to adjust"
              onClick={() => setCalories((c) => (c >= 1000 ? 100 : c + 100))}
            >
              <div className="progress" role="progressbar" aria-label="Calories quantity" aria-valuenow={calories} aria-valuemin="0" aria-valuemax="1000">
                <div className="progress-bar" style={{ width: `${Math.min(100, (calories / 1000) * 100)}%` }}></div>
              </div>
              <h6>{calories}</h6>
            </div>
          </div>

          <div className="CaloriesQuantity CoinsTypeBox">
            <h5>
              Max cook time<img src={mark} alt="" />
            </h5>
            <div
              className="Percentage"
              role="button"
              tabIndex={0}
              title="Click to adjust"
              onClick={() => setCookTime((c) => (c >= 180 ? 15 : c + 15))}
            >
              <div className="progress" role="progressbar" aria-label="Max cook time" aria-valuenow={cookTime} aria-valuemin="0" aria-valuemax="180">
                <div className="progress-bar" style={{ width: `${Math.min(100, (cookTime / 180) * 100)}%` }}></div>
              </div>
              <h6>{cookTime}</h6>
            </div>
          </div>

          <div className="CaloriesQuantity CoinsTypeBox">
            <h5>
              Serving<img src={mark} alt="" />
            </h5>
            <div
              className="Percentage"
              role="button"
              tabIndex={0}
              title="Click to adjust"
              onClick={() => setServing((s) => (s >= 10 ? 1 : s + 1))}
            >
              <div className="progress" role="progressbar" aria-label="Serving" aria-valuenow={serving} aria-valuemin="0" aria-valuemax="10">
                <div className="progress-bar" style={{ width: `${Math.min(100, (serving / 10) * 100)}%` }}></div>
              </div>
              <h6>{serving}</h6>
            </div>
          </div>

          <button type="button" className="ResetBottom" onClick={resetDefaults}>
            <h4>Reset to default</h4>
            <img src={doubleArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}
