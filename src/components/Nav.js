import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../dark-mode/theme'
import { GlobalStyles } from '../dark-mode/global'

function Nav() {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

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
                                <Link to="/recipes">Recipes</Link>
                            </li>
                            <li><a href="#" onClick={toggleTheme}>{theme} Mode</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </ThemeProvider>
    );
}

export default Nav