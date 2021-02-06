import react from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function Home() {
    return (
        <Image>
            <p>Hello!</p>
        </Image>
    )
}

export default Home
const Image = styled.div`
  background-image: url(${"https://res.cloudinary.com/boresism/image/upload/v1612381125/Wallpaper/three-zinnen-2738867_1920_kqq8rt.jpg"});
    height: 100vh;

`