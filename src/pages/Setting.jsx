import { useState } from 'react'
import DashSidebar from '../components/DashSidebar.jsx'
import DashNav from '../components/DashNav.jsx'
import { useAuth } from '../context/AuthContext.jsx'

import settingPic from '../assets/img/Setting-pic.png'
import pencil from '../assets/img/Pencil.svg'
import dollarSign from '../assets/img/Dollar-Sign.svg'
import england from '../assets/img/England.svg'
import slideDown from '../assets/img/Slide Down Arrow.svg'
import t2 from '../assets/img/t2.svg'
import t3 from '../assets/img/t3.svg'
import t4 from '../assets/img/t4.svg'
import t5 from '../assets/img/t5.svg'
import footer1 from '../assets/img/footer1.svg'
import footer2 from '../assets/img/footer2.svg'
import footer3 from '../assets/img/footer3.svg'

const LANGUAGES = [
  { label: 'English', icon: england },
  { label: 'TAI', icon: t2 },
  { label: 'ITALIAN', icon: t3 },
  { label: 'JAPANISE', icon: t4 },
  { label: 'AMERICAN', icon: t5 },
]

function strengthOf(password) {
  if (!password) return 'None'
  if (password.length < 6) return 'Weak'
  if (password.length < 10) return 'Good'
  return 'Strong'
}

export default function Setting() {
  const { user, updateUser, tokens } = useAuth()
  const [email, setEmail] = useState(user?.email ?? '')
  const [password, setPassword] = useState('')
  const [language, setLanguage] = useState(LANGUAGES.find((l) => l.label === user?.language) ?? LANGUAGES[0])
  const [weeklyMail, setWeeklyMail] = useState(user?.weeklyMail ?? true)
  const [saved, setSaved] = useState(false)

  function handleSave() {
    updateUser({ email, ...(password ? { password } : {}), language: language.label, weeklyMail })
    setPassword('')
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <section className="MainSection">
      <DashSidebar />
      <div className="Search-RightSide">
        <DashNav />
        <div className="MainSectionSettings">
          <div className="SettingMain">
            <div className="SettingLeftSide">
              <div className="ProfilePic">
                <img src={settingPic} alt="" />
                <div className="PencilPic">
                  <img src={pencil} alt="" />
                </div>
              </div>
              <div className="SettingPara">
                <p>account Status</p>
              </div>
              <div className="DollarContant">
                <img src={dollarSign} alt="" />
                <p className="DollarNumber">{tokens}</p>
              </div>
            </div>
            <div className="SettingRightSide">
              <div className="Mainsection">
                <h1>Account information</h1>
                {saved && <p className="form-success">Saved!</p>}
                <p>Login</p>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="ParaTwo">password</p>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Leave blank to keep current password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="Strenght">
                  <h6>Password strength</h6>
                  <h5>{strengthOf(password)}</h5>
                </div>
                <button type="button" className="FR-Button" onClick={handleSave}>
                  change password
                </button>
                <h1 className="Account">Account information</h1>
                <div className="WorldSelect">
                  <h5>language</h5>
                  <div className="dropdown">
                    <button className="DropDownButton dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <div className="Map">
                        <img src={language.icon} alt="" />
                        {language.label}
                      </div>
                      <div className="SlideArrow">
                        <img src={slideDown} alt="" />
                      </div>
                    </button>
                    <ul className="dropdown-menu">
                      {LANGUAGES.filter((l) => l.label !== 'English').map((l) => (
                        <li key={l.label}>
                          <button type="button" className="dropdown-item" onClick={() => setLanguage(l)}>
                            <img src={l.icon} alt="" />
                            {l.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="BottomBtn">
                    <div className="ToggleButton">
                      <button
                        type="button"
                        className={`toggle-btn${weeklyMail ? ' active' : ''}`}
                        onClick={() => setWeeklyMail((v) => !v)}
                        aria-pressed={weeklyMail}
                      >
                        <div className="inner-circle"></div>
                      </button>
                    </div>
                    <p>Weekly subscription mail</p>
                  </div>
                </div>
                <button type="button" className="FR-Button" style={{ marginTop: 16 }} onClick={handleSave}>
                  Save settings
                </button>
              </div>
            </div>
          </div>
          <div className="footerData BottomSearch SettingBottom">
            <span className="f-text">© Copyright 2023 Bright Chef All Rights Reserved.</span>
            <div className="footericons">
              <span>Follow us</span>
              <div className="footerimages">
                <div className="footerimg">
                  <img src={footer1} alt="" />
                </div>
                <div className="footerimg">
                  <img src={footer2} alt="" />
                </div>
                <div className="footerimg">
                  <img src={footer3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
