import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Recipes from './components/Recipes'
import Nav from './components/Nav'
import Recipe from './components/Recipe'
import Category from './components/Category'
import './index.css'

function App() {

  const [isLoading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`https://cooking-with-chef-phil.herokuapp.com/recipes/`)
      console.log(response)
      setRecipes(response.data)
      setLoading(false)
    }
    fetchData()
  }, [])

  const RecipesComponent = () =>
  (
    <Recipes
      recipes={recipes}
      name="Recipes"
    />
  )

  const CategoriesComponent = () =>
  (
    <Category
      recipes={recipes}
    />
  )

  return isLoading ? (
    <div className="height-100 uk-flex uk-flex-center uk-flex-middle">
      <div uk-spinner="ratio: 3"></div>
    </div>
  ) :
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' render={RecipesComponent} />
        <Route exact path='/recipes' render={RecipesComponent} />
        <Route exact path="/recipes/:id" component={Recipe} />
        <Route path="/categories/:id" render={CategoriesComponent} exact />
      </Switch>
    </Router>
}

export default App

