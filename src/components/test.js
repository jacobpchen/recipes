import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {

    const [recipes, setRecipes] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(`https://cooking-with-chef-phil.herokuapp.com/recipes/`)
            setRecipes(response.data)
            console.log("Printing from test")
            console.log(recipes)
        }
        fetchData()
    }, [])


    return (
        <div>Hello From test</div>
    )
}

export default App

