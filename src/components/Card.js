import React from "react";
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {

    return (
        <div>

            <Link to={`/recipes/${recipe.id}`} className="uk-link-reset">
                <div className="uk-card uk-card-muted">
                    <div className="uk-card-media-top">
                        <img
                            src={recipe.link}
                            height="100"
                            alt="pictures of recipes"
                        />
                    </div>
                    <div className="uk-card-body">
                        <p id="category" className="uk-text-uppercase uk-text-large">
                            {recipe.title}
                        </p>
                        {/* {recipe.views} */}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;