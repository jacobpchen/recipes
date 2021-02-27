import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../dark-mode/theme'
import { GlobalStyles } from '../dark-mode/global'

function Nav() {

    const [theme, setTheme] = useState('light')
    const [categories, setCategories] = useState([])

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    /*
    const fetchAPI = async () => {
        const fetchData = async () => {
            const response = await axios(`https://cooking-with-chef-phil.herokuapp.com/categories/`)
            setCategories(response.data)
        }
        console.log(categories)
        fetchData()
    }
    */
    useEffect(() => {
        let mounted = true;
        const loadData = async () => {
            const response = await axios(`https://cooking-with-chef-phil.herokuapp.com/categories/`)

            if (mounted) {
                setCategories(response.data)
            }
        }
        loadData()

        return () => {
            mounted = false
        }

    }, [categories])

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div>
                <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="uk-navbar-right">
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
                </nav>
            </div>
        </ThemeProvider>
    );
}

export default Nav