import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import styled from 'styled-components'
import Recipes from './Recipes'

const Category = () => {
    let { id } = useParams()
    const [name, setName] = useState('')
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        let mounted = true

        const loadData = async () => {
            const response = await axios(`https://cooking-with-chef-phil.herokuapp.com/categories/${id}`)
            if (mounted) {
                setRecipes(response.data.recipes)
                setName(response.data.name)
            }
        }
        loadData()

        return () => {
            mounted = false
        }
    }, [id])

    return (
        <div>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <Recipes
                        recipes={recipes}
                        name={name}
                    />
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