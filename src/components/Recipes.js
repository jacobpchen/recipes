import React from "react";
import Card from './Card'
import styled from 'styled-components'

const Recipe = ({ recipes, name }) => {
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    shuffle(recipes)

    const leftRecipeCount = Math.ceil(recipes.length / 4);
    const leftRecipe = recipes.slice(0, leftRecipeCount);
    const rightRecipe = recipes.slice(leftRecipeCount, recipes.length);

    return (
        < div className="uk-container" >
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
        </div >
    );
};

export default Recipe;

const Pheading = styled.p`
    font-family: Staatliches;
    font-size: 120px;
`