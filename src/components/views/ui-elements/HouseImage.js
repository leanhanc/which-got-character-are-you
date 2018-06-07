import styled from 'styled-components'

const houseImage = styled.div`

@media only screen and (min-width: 320px) and (max-width: 1024px) {

  text-align: center;
.mobileHouses{
  width:250px;
  padding-top: 1rem;
}
.house {
  
  display: none
}
}

@media only screen and (min-width: 1024px) {

text-align: center;
margin:64px auto;

.mobileHouses{
display:none
}

.house {
  margin: auto 32px;
  width: 95px;
  display: inline-block;
}
`

export default houseImage
