
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';






const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color:${(props)=>(props.them=="black" ? "white":"black")} ;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export {GlobalStyle}





const Button=styled.button`

width:100px;
height:50px;
background-color:${(props)=>(props.them=="black" ? "yellow":"red")};
margin-left:30%;
margin-top:10%;
border-radius:20px;
border:none



`

export default Button