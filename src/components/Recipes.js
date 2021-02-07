import React from "react";
import Card from './Card'
import styled from 'styled-components'

class Recipes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: {}
        }
    }

    render() {
        console.log("Inside Recipes")
        console.log(this.props.recipes)
        const leftRecipeCount = Math.ceil(this.props.recipes.length / 4);
        const leftRecipe = this.props.recipes.slice(0, leftRecipeCount);
        const rightRecipe = this.props.recipes.slice(leftRecipeCount, this.props.recipes.length);

        return (
            <div className="uk-container">
                <Pheading>Recipes</Pheading>
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
        )
    }

}

export default Recipes

const Pheading = styled.p`
    font-family: Staatliches;
    font-size: 120px;
`