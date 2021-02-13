class Recipes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: {},
        }
    }

    render() {
        console.log("INSIDE RECIPES")
        console.log(this.props.recipes)
        console.log(this.props.leftRecipe)

        return (
            <div className="uk-container">
                <Pheading>{this.props.name}</Pheading>
                <div className="uk-child-width-1-2" data-uk-grid>
                    <div>
                        {this.props.leftRecipe.map((recipe, i) => {
                            return <Card recipe={recipe} key={`recipe__${recipe.id}`} />;
                        })}
                    </div>
                    <div>
                        <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                            {this.props.rightRecipe.map((recipe, i) => {
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