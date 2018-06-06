import styled from 'styled-components'

const optionbutton = styled.button`

  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    &:active{
      background-color: ${props => props.theme.primaryColor};
      transform: scale(1.1);
      border: 0px
    }
    padding: 15px 20px;
    border-radius: 5px;
    border: 1.5px solid darkgray;
    font-weight: bolder;
    background-color: transparent;
    font-family: 'Inconsolata', monospace;
    letter-spacing: 2px;
    cursor: pointer;
    color: lightgrey;
    margin: 32px auto;
    display: block;
  }

  @media only screen and (min-width: 1024px) {
    &:active {
    background-color: ${props => props.theme.primaryColor};
    transform: scale(1.1);
    border: 0px
  }
  &:hover {
    border: 2px solid ${props => props.theme.primaryColor};
    transform: scale(1.1);

  }
    padding: 15px 20px;
    border-radius: 5px;
    border: 1.5px solid darkgray;
    background-color: transparent;
    font-weight: bolder;
    font-family: 'Inconsolata', monospace;
    letter-spacing: 2px;
    color: lightgrey;
    cursor: pointer;
    margin: 8px 16px;
    display: inline-block;
  }
`

export default optionbutton
