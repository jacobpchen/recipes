import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Recipes from './components/Recipes'
import Home from './components/Home'
import Nav from './components/Nav'
import Recipe from './components/Recipe'
import Category from './components/Category'


function App() {

  const [isLoading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState()
  const [leftRecipeCount, setLeftRecipeCount] = useState(0)
  const [leftRecipe, setLeftRecipe] = useState([])
  const [rightRecipe, setRightRecipe] = useState([])

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

  if (isLoading) {
    return (<div>Loading...</div>)
  }
  else {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' render={RecipesComponent} />
          <Route exact path='/recipes' render={RecipesComponent} />
          <Route exact path="/recipes/:id" component={Recipe} />
          <Route path="/categories/:id" render={CategoriesComponent} exact />
        </Switch>
      </Router>
    )
  }

  /*   return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' render={isLoading ? (<div>Loading...</div>) : RecipesComponent} />
          <Route exact path='/recipes' render={RecipesComponent} />
          <Route exact path="/recipes/:id" component={Recipe} />
          <Route path="/categories/:id" render={CategoriesComponent} exact />
        </Switch>
      </Router>
  
    ) */

}

export default App

