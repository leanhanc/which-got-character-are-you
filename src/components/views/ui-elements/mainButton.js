import styled from 'styled-components'

const mainButton = styled.button`

@media only screen and (min-width: 320px) and (max-width: 1024px) {
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Cinzel', serif;
  letter-spacing: 0.3rem;
  font-size: 15px;
  font-weight: bold;
  display: block;
  position: relative;
  margin: 4rem auto;
  text-align: center;
  background-color: ${props => props.theme.primaryColor};
  color: whitesmoke;
  border: 2px solid ${props => props.theme.primaryColor};
  border-radius: 5px;
  line-height: 3em;
  padding-left: 5em;
  padding-right: 5em;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  cursor:pointer

&.hover {
  color: whitesmoke;
  box-shadow: 0 0 30px 0 rgba(184, 134, 11, 0.5);
  background-color: ${props => props.theme.primaryColor};;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
&.hover:before {
  -webkit-animation: shine 0.8s 0s linear;
  -moz-animation: shine 0.8s 0s linear;
  animation: shine 0.8s 0s linear;
}
&:active {
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: box-shadow 0.2s ease-in;
  -moz-transition: box-shadow 0.2s ease-in;
  transition: box-shadow 0.2s ease-in;
}
&&:before {
  content: '';
  display: block;
  width: 0px;
  height: 86%;
  position: absolute;
  top: 7%;
  left: 0%;
  opacity: 0;
  background: white;
  box-shadow: 0 0 15px 3px white;
  -webkit-transform: skewX(-20deg);
  -moz-transform: skewX(-20deg);
  -ms-transform: skewX(-20deg);
  -o-transform: skewX(-20deg);
  transform: skewX(-20deg);
}

@-webkit-keyframes shine {
  from {
  opacity: 0;
  left: 0%;
  }
  50% {
  opacity: 1;
  }
  to {
  opacity: 0;
  left: 100%;
  }
}
@-moz-keyframes shine {
  from {
  opacity: 0;
  left: 0%;
  }
  50% {
  opacity: 1;
  }
  to {
  opacity: 0;
  left: 100%;
  }
}
@keyframes shine {
  from {
  opacity: 0;
  left: 0%;
  }
  50% {
  opacity: 1;
  }
  to {
  opacity: 0;
  left: 100%;
  }
}

}
}

@media only screen and (min-width: 1024px) {
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Cinzel', serif;
    letter-spacing: 0.3rem;
    font-size: 20px;
    font-weight: bold;
    display: block;
    position: relative;
    margin: 8rem auto;
    text-align: center;
    background-color: transparent;
    color: ${props => props.theme.primaryColor};
    border: 2px solid ${props => props.theme.primaryColor};
    border-radius: 5px;
    line-height: 3em;
    padding-left: 5em;
    padding-right: 5em;
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    cursor:pointer
 
  &:hover {
    color: whitesmoke;
    box-shadow: 0 0 30px 0 rgba(184, 134, 11, 0.6);
    background-color: ${props => props.theme.primaryColor};;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }
  &:hover:before {
    -webkit-animation: shine 0.7s 0s linear;
    -moz-animation: shine 0.7s 0s linear;
    animation: shine 0.7s 0s linear;
  }
  &:active {
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: box-shadow 0.2s ease-in;
    -moz-transition: box-shadow 0.2s ease-in;
    transition: box-shadow 0.2s ease-in;
  }
  &&:before {
    content: '';
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: white;
    box-shadow: 0 0 15px 3px white;
    -webkit-transform: skewX(-20deg);
    -moz-transform: skewX(-20deg);
    -ms-transform: skewX(-20deg);
    -o-transform: skewX(-20deg);
    transform: skewX(-20deg);
  }

  @-webkit-keyframes shine {
    from {
    opacity: 0;
    left: 0%;
    }
    50% {
    opacity: 1;
    }
    to {
    opacity: 0;
    left: 100%;
    }
  }
  @-moz-keyframes shine {
    from {
    opacity: 0;
    left: 0%;
    }
    50% {
    opacity: 1;
    }
    to {
    opacity: 0;
    left: 100%;
    }
  }
  @keyframes shine {
    from {
    opacity: 0;
    left: 0%;
    }
    50% {
    opacity: 1;
    }
    to {
    opacity: 0;
    left: 100%;
    }
  }
  
}
`

export default mainButton
