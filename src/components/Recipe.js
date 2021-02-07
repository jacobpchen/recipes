import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Moment from 'react-moment'
import styled from 'styled-components'
import ReactMarkdown from "react-markdown";
import axios from "axios";

function Recipe() {

    console.log("Inside Recipe.js")
    let { id } = useParams()
    console.log(id)
    console.log(`https://cooking-with-chef-phil.herokuapp.com/recipes/${id}`)

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [createdAt, setCreatedAt] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(`https://cooking-with-chef-phil.herokuapp.com/recipes/${id}`)
            setTitle(response.data.title)
            setImage(response.data.link)
            setIngredients(response.data.ingredients)
            setInstructions(response.data.instructions)
            setCreatedAt(response.data.createdAt)
        }
        fetchData()
    })

    return (
        <div>
            <div
                id="banner"
                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                data-src={image}
                data-srcset={image}
                data-uk-img
            >
                <h1>{title}</h1>
            </div>

            <div className="uk-section">
                <div className="uk-container uk-container-small recipe-card">
                    <Pheading className="uk-margin-top">Ingredients</Pheading>
                    <ReactMarkdown source={ingredients} />
                    <Pheading>Instructions</Pheading>
                    <ReactMarkdown source={instructions} />
                    <p className="uk-margin-bottom">
                        Posted on: <Moment format="MMM Do YYYY">{createdAt}</Moment>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Recipe

const Pheading = styled.p`
font-family: Staatliches;
    font-size: 50px;
`