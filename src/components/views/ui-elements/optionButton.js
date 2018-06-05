import styled from 'styled-components'

const optionbutton = styled.button`

@media only screen and (min-width: 320px) and (max-width: 600px) {
  padding: 15px 20px;
  border-radius: 7px;
  border: 1.5px solid darkgray;
  background-color: transparent;
  font-weight: bolder;
  font-family: 'Inconsolata', monospace;
  letter-spacing: 2px;
  color: lightgrey;
  cursor: pointer;
  margin: 32px auto;
  display: block}

  @media only screen and (min-width: 600px) and (max-width: 1024px) {
    padding: 15px 20px;
    border-radius: 7px;
    border: 1.5px solid darkgray;
    background-color: transparent;
    font-weight: bolder;
    font-family: 'Inconsolata', monospace;
    letter-spacing: 2px;
    color: lightgrey;
    cursor: pointer;
    margin: 32px auto;
    display: block}

@media only screen and (min-width: 1024px) {
padding: 15px 20px;
border-radius: 7px;
border: 1.5px solid darkgray;
background-color: transparent;
font-weight: bolder;
font-family: 'Inconsolata', monospace;
letter-spacing: 2px;
color: lightgrey;
cursor: pointer;
margin: 8px 16px;
display: inline-block;}`

export default optionbutton
