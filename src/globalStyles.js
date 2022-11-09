import { createGlobalStyle } from "styled-components";
import img from './assets/Images/fondo.jpg'




const GlobalStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}


body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro',sans-serif;
    background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
}

`

export default GlobalStyle;