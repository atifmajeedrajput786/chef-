import { useState } from 'react'
import DashSidebar from '../components/DashSidebar.jsx'
import DashNav from '../components/DashNav.jsx'
import { historyEntries } from '../data/historyData.js'
import { ossoBucoRecipe } from '../data/recipeData.js'
import { dailyMeals, totalWeeklyCalories } from '../data/mealPlanData.js'

import sp1 from '../assets/img/sp1.svg'
import sp2 from '../assets/img/sp2.svg'
import sp3 from '../assets/img/sp3.svg'
import tickContant from '../assets/img/tick-contant.svg'

function RecipeDetail() {
  const recipe = ossoBucoRecipe
  return (
    <div className="HistoryRightContant">
      <div className="SpanTag">
        {recipe.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="iconsContant">
        <div className="icontext">
          <img src={sp1} alt="" />
          <p>{recipe.calories}</p>
        </div>
        <div className="icontext">
          <img src={sp2} alt="" />
          <p>{recipe.serves}</p>
        </div>
        <div className="icontext">
          <img src={sp3} alt="" />
          <p>{recipe.cookTime}</p>
        </div>
      </div>
      <h5>Ingredients</h5>
      <div className="TickContant">
        {recipe.ingredients.map((ing, i) => (
          <div className="ContantLines" key={i}>
            <img src={tickContant} alt="" />
            <p>{ing}</p>
          </div>
        ))}
      </div>
      <h4>Instructions:</h4>
      <div className="ContantBoxRight">
        {recipe.instructions.map((step, i) => (
          <p key={i}>{step}</p>
        ))}
      </div>
    </div>
  )
}

function MealPlanDetail() {
  return (
    <div className="HistoryRightContant">
      <div className="icontext">
        <img src={sp1} alt="" />
        <p>Approximately total {totalWeeklyCalories} calories per serving.</p>
      </div>
      {dailyMeals.map((meal, i) => (
        <div key={i} style={{ marginTop: '16px' }}>
          <h3>{meal.title}</h3>
          <h6>{meal.type}</h6>
          <div className="icontext">
            <img src={sp1} alt="" />
            <p>{meal.calories}</p>
          </div>
          <div className="icontext">
            <img src={sp3} alt="" />
            <p>{meal.time}</p>
          </div>
          <h5>Ingredients</h5>
          <div className="TickContant">
            {meal.ingredients.map((ing, ii) => (
              <div className="ContantLines" key={ii}>
                <img src={tickContant} alt="" />
                <p>{ing}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function History() {
  const [openId, setOpenId] = useState(historyEntries[0]?.id ?? null)
  const [dashOpen, setDashOpen] = useState(false)

  return (
    <section className={`MainSection${dashOpen ? ' active' : ''}`} id="DashBordClass">
      <DashSidebar mobileButtonId="clickBtn" onMobileToggle={() => setDashOpen((v) => !v)} />
      <div className="Search-RightSide">
        <DashNav />
        <div className="HistoryPage">
          <div className="HistoryCalender">
            <h1>History</h1>
          </div>
          <div className="HistoryAccordionBox">
            <div className="accordion">
              {historyEntries.map((entry) => (
                <div className="accordion-item" key={entry.id}>
                  <div className="HistoryMealBox">
                    <div className="HistoryLeftContant">
                      <button
                        type="button"
                        className={`accordion-button${openId === entry.id ? '' : ' collapsed'}`}
                        onClick={() => setOpenId(openId === entry.id ? null : entry.id)}
                      >
                        <img src={entry.icon} alt="" />
                        <div>
                          <h3>{entry.title}</h3>
                          <span>{entry.date}</span>
                        </div>
                      </button>
                    </div>
                    {openId === entry.id && (
                      <div className="accordion-collapse collapse show">
                        {entry.type === 'recipe' ? <RecipeDetail /> : <MealPlanDetail />}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
