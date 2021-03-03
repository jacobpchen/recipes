import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../dark-mode/theme'
import { GlobalStyles } from '../dark-mode/global'
import Recipes from './Recipes'

function Nav() {

    const [theme, setTheme] = useState('light')
    const [categories, setCategories] = useState([])
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const [recipes, setRecipes] = useState([])

    const handleChange = event => {
        setSearchTerm(event.target.value);
        console.log(searchTerm)

    };

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    useEffect(() => {
        let mounted = true;
        const loadCaterogiesData = async () => {
            const categoriesResponse = await axios(`https://cooking-with-chef-phil.herokuapp.com/categories/`)
            if (mounted) {
                setCategories(categoriesResponse.data)
            }
        }
        const loadRecipesData = async () => {
            const recipesResponse = await axios(`https://cooking-with-chef-phil.herokuapp.com/recipes/`)
            if (mounted) {
                setRecipes(recipesResponse.data)
            }
        }
        loadCaterogiesData()
        loadRecipesData()
        return () => {
            mounted = false
        }
    }, [categories])

    useEffect(() => {
        const results = recipes.filter(res => res.title.toLowerCase().includes(searchTerm)
        )
        setSearchResults(results)
        console.log(searchResults)
    }, [searchTerm])

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div>
                <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li>
                                <Link to="/">Recipes</Link>
                            </li>

                            {categories.map((category, i) => {
                                return (
                                    <li key={category.id}>
                                        <Link
                                            to={`/categories/${category.id}`}
                                            className="uk-link-reset">
                                            {category.name}
                                        </Link>
                                    </li>
                                );
                            })}

                            <li><a href="#" onClick={toggleTheme}>{theme} Mode</a></li>
                        </ul>
                    </div>

                    {/* <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <form className="uk-search uk-search-navbar">
                                <span uk-search-icon="true"></span>
                                <input className="uk-search-input"
                                    type="search"
                                    placeholder="Search"
                                    onChange={handleChange}
                                >
                                </input>
                            </form>
                        </ul>
                    </div> */}
                </nav>
            </div>
        </ThemeProvider>
    );
}

export default Nav