import "modern-normalize";
import { createGlobalStyle } from "styled-components";
import ManropeBold from "../assets/fonts/Manrope-Bold.ttf";
import ManropeRegular from "../assets/fonts/Manrope-Regular.ttf";
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Manrope-Bold';
  src: url(${ManropeBold}) format('woff');
  font-style: normal;
  font-weight: 700;
  
}
@font-face {
  font-family: 'Manrope-Regular';
  src: url(${ManropeRegular}) format('woff');
  font-style: normal;
  font-weight: 400;
  
}

body{
  background-color: #f7f9f9;
  color: #141414;
  font-family:"Manrope-Regular";
}
a{
    text-decoration:none
}
ul,ol{
    margin: 0;
    padding:0;
    list-style: none;
}



h1,h2,h3,p{
margin:0;
}


img{
    display: block;
    max-width: 100%;
    height: auto;
}
button{
    display:block;
    cursor: pointer;
    border:none;
    padding:0;
    margin: 0;
    color:inherit;
    font:inherit;
    background-color: transparent;
}

`;
export default GlobalStyle;
