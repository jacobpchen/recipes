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

  const [recipes, setRecipes] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`https://cooking-with-chef-phil.herokuapp.com/recipes/`)
      setRecipes(response.data)
      console.log(recipes)
    }
    fetchData()
  }, [])

  const RecipesComponent = () =>
  (
    <Recipes
      recipes={recipes}
    />
  )

  const CategoriesComponent = () =>
  (
    <Category
      recipes={recipes}
    />
  )

  return (


    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/recipes' render={RecipesComponent} />
        <Route exact path="/recipes/:id" component={Recipe} />
        <Route path="/categories/:id" render={CategoriesComponent} exact />
      </Switch>
    </Router>

  )

}

export default App

