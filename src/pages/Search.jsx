import { useState } from 'react'
import DashSidebar from '../components/DashSidebar.jsx'
import DashNav from '../components/DashNav.jsx'
import { ossoBucoRecipe, ingredientSuggestions } from '../data/recipeData.js'
import { dailyMeals, weekDays, totalWeeklyCalories } from '../data/mealPlanData.js'
import { useAuth } from '../context/AuthContext.jsx'

import mark from '../assets/img/mark.svg'
import sp1 from '../assets/img/sp1.svg'
import sp2 from '../assets/img/sp2.svg'
import sp3 from '../assets/img/sp3.svg'
import tickContant from '../assets/img/tick-contant.svg'

function RecipeDetail({ recipe }) {
  return (
    <div className="SearchContant">
      <h2>{recipe.title}</h2>
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
      <h3>Ingredients</h3>
      <div className="MainContantBox">
        <div className="ContantBoxLeft">
          {recipe.ingredients.map((ing, i) => (
            <div className="ContantLines" key={i}>
              <img src={tickContant} alt="" />
              <p>{ing}</p>
            </div>
          ))}
        </div>
        <div className="ContantBoxRight">
          {recipe.instructions.map((step, i) => (
            <p key={i}>{step}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Search() {
  const { tokens, setTokens } = useAuth()
  const [tab, setTab] = useState('recipe')
  const [query, setQuery] = useState('')
  const [ingredientQuery, setIngredientQuery] = useState('')
  const [selectedIngredient, setSelectedIngredient] = useState(null)
  const [showResult, setShowResult] = useState(true)
  const [openDay, setOpenDay] = useState(0)

  function findRecipe(e) {
    e.preventDefault()
    if (tokens < 20) {
      alert('Not enough tokens. Upgrade your plan to keep cooking!')
      return
    }
    setTokens(tokens - 20)
    setShowResult(true)
  }

  return (
    <section className="MainSection">
      <DashSidebar />
      <div className="Search-RightSide">
        <DashNav />
        <div className="SearchNavTab">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link${tab === 'recipe' ? ' active' : ''}`}
                type="button"
                role="tab"
                aria-selected={tab === 'recipe'}
                onClick={() => setTab('recipe')}
              >
                Recipe
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link${tab === 'mealplan' ? ' active' : ''}`}
                type="button"
                role="tab"
                aria-selected={tab === 'mealplan'}
                onClick={() => setTab('mealplan')}
              >
                Meal planing
              </button>
            </li>
          </ul>

          <div className="tab-content">
            {tab === 'recipe' && (
              <div className="tab-pane fade show active" role="tabpanel">
                <form className="SearchBar" onSubmit={findRecipe}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Top italian dishes with ruccola"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </form>
                <div className="FR-Contant">
                  <button type="button" className="FR-Button" onClick={findRecipe}>
                    Find recipts
                  </button>
                  <div className="imageContent">
                    <img src={mark} alt="" />
                    <p>This will use 20 tokens. {tokens} tokens remaining.</p>
                  </div>
                </div>
                <div className="Line"></div>
                {showResult && <RecipeDetail recipe={ossoBucoRecipe} />}
              </div>
            )}

            {tab === 'mealplan' && (
              <div className="tab-pane fade show active" role="tabpanel">
                <form className="SearchBar" onSubmit={findRecipe}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please type your ingredients and wishes here... "
                    value={ingredientQuery}
                    onChange={(e) => setIngredientQuery(e.target.value)}
                  />
                </form>
                <div className="RadioContant">
                  <div className="RadioButtons">
                    <h2> Ingredients suggestion</h2>
                    <div className="RadioBtn">
                      {ingredientSuggestions.map((ing, i) => (
                        <div className="form-check form-check-inline" key={ing}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id={`inlineRadio${i + 1}`}
                            value={ing}
                            checked={selectedIngredient === ing}
                            onChange={() => setSelectedIngredient(ing)}
                          />
                          <label className="form-check-label" htmlFor={`inlineRadio${i + 1}`}>
                            {ing}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="FR-Contant RadioContantSide">
                    <button type="button" className="FR-Button" onClick={findRecipe}>
                      Find recipts
                    </button>
                    <div className="imageContent">
                      <img src={mark} alt="" />
                      <p>This will use 20 tokens. {tokens} tokens remaining.</p>
                    </div>
                  </div>
                </div>
                <div className="Line"></div>
                <div className="SearchBoxMeal">
                  <div className="MealHead">
                    <h1>Weekly meal plan</h1>
                    <div className="icontext">
                      <img src={sp1} alt="" />
                      <p>Approximately total {totalWeeklyCalories} calories per serving.</p>
                    </div>
                  </div>
                  <div className="AccordionSections">
                    <div className="accordion">
                      {weekDays.map((day, dayIdx) => (
                        <div className="accordion-item" key={day}>
                          <h2 className="accordion-header">
                            <button
                              className={`accordion-button${openDay === dayIdx ? '' : ' collapsed'}`}
                              type="button"
                              onClick={() => setOpenDay(openDay === dayIdx ? -1 : dayIdx)}
                            >
                              {day}
                            </button>
                          </h2>
                          {openDay === dayIdx && (
                            <div className="accordion-collapse collapse show SearchDownContant">
                              <div className="accordion-body SearchDownContant">
                                {dailyMeals.map((meal, i) => (
                                  <div className="MainContantAcc" key={i}>
                                    <div className="LeftContant">
                                      <h3>{meal.title}</h3>
                                      <h6>{meal.type}</h6>
                                      <img src={meal.image} alt="" />
                                    </div>
                                    <div className="RightContant">
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
                                      <h4>Instructions:</h4>
                                      <div className="ContantBoxRight">
                                        {meal.instructions.map((step, ii) => (
                                          <p key={ii}>{step}</p>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
