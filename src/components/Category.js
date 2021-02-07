import React from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import Recipes from './Recipes'

const Category = () => {
    let { id } = useParams()
    console.log("Inside Category")
    console.log(id)
    console.log(`https://cooking-with-chef-phil.herokuapp.com/categories/${id}`)
    return (
        <div>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <Pheading>{id.name}</Pheading>
                    <Recipes recipes={category.recipes} />
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