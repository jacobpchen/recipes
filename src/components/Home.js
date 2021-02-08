import react from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../home.css'

function Home() {
    return (
        <HomeBackground>
            <div>
                <div className="uk-container">
                    <Pheading>Jacob Chen</Pheading>
                    <div class="uk-flex uk-flex-wrap uk-flex-wrap-around uk-background-muted uk-height-medium">
                        <div class="uk-width-1-3 uk-card uk-card-default uk-card-body uk-card-small">
                            <p>Before pursuing my passion in technology and computer science,
                            I began my career in hospitality and management and quickly
                            moved up the ranks to become a Director of Sales. Even with a shift in career focus,
                            my leadership skills are evident as I often lead group assignments and
                        encourage teamwork and cooperation.</p></div>
                        <div class="uk-width-1-2 uk-card uk-card-default uk-card-body uk-card-small uk-margin-left">
                            <p>My strongest programming languages include Python, C++, HTML, CSS, and JavaScript. My main interests
                            are in back-end or full-stack development. My current projects include creating a React web application where I post recipes
                            using a custom API to share recipes from classically trained Chef in NYC and creating a GUI for a symmetric
                            searchable encryption scheme that I built using Python.
                        </p></div>

                    </div>
                </div>
            </div>
            <Image>
                <img src="https://res.cloudinary.com/boresism/image/upload/v1612640484/profile-pic-circle_kgde46.png" alt="profile picture"></img>
            </Image>
        </HomeBackground>
    )
}

export default Home
const HomeBackground = styled.div`
    height: 80vh;
    background-color: #f1faee;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Pheading = styled.p`
    font-family: Staatliches;
    font-size: 120px;   
`
const Image = styled.div`
height: 300px;
width: 300px;
background-image: url(${"https://res.cloudinary.com/boresism/image/upload/v1612640484/profile-pic-circle_kgde46.png"})
`