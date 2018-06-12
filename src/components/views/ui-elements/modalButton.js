import styled from 'styled-components'

const modalbutton = styled.button`
padding: 15px 40px;
border-radius: 7px;
border: 1.5px solid whitesmoke;
background-color: transparent;
font-weight: bolder;
font-family: 'Inconsolata';
letter-spacing: 2px;
color: whitesmoke;
cursor: pointer;
margin: 24px auto;
visibility:hidden;
display: block;
transition: 0.1s all;

  &:hover{
    transform: scale(1.1)
}
`

export default modalbutton
