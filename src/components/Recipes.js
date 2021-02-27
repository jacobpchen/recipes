import React from "react";
import Card from './Card'
import styled from 'styled-components'

const Recipe = ({ recipes, name }) => {
    console.log("INSIDE RECIPES")
    console.log(recipes)

    const leftRecipeCount = Math.ceil(recipes.length / 4);
    const leftRecipe = recipes.slice(0, leftRecipeCount);
    const rightRecipe = recipes.slice(leftRecipeCount, recipes.length);

    return (
        <div className="uk-container">
            <Pheading>{name}</Pheading>
            <div className="uk-child-width-1-2" data-uk-grid>
                <div>
                    {leftRecipe.map((recipe, i) => {
                        return <Card recipe={recipe} key={`recipe__${recipe.id}`} />;
                    })}
                </div>
                <div>
                    <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                        {rightRecipe.map((recipe, i) => {
                            return <Card recipe={recipe} key={`recipe__${recipe.id}`} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;

const Pheading = styled.p`
    font-family: Staatliches;
    font-size: 120px;
`