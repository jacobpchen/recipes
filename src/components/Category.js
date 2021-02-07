import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import styled from 'styled-components'
import Recipes from './Recipes'

const Category = () => {
    let { id } = useParams()

    console.log("Inside Category")
    console.log(id)
    console.log(`https://cooking-with-chef-phil.herokuapp.com/categories/${id}`)

    const [name, setName] = useState('')
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(`https://cooking-with-chef-phil.herokuapp.com/categories/${id}`)
            setName(response.data.name)
            console.log(name)
            setRecipes(response.data.recipes)
            console.log(recipes)
        }
        fetchData()
    })

    return (
        <div>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <Pheading>{name}</Pheading>
                    <Recipes recipes={recipes} />
                </div>
            </div>
        </div>
    )
}

const Pheading = styled.p`
font-family: Staatliches;
    font-size: 120px;
`

export default Category