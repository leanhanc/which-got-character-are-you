import React from 'react'
import HouseImage from '../ui-elements/HouseImage'

const Houses = () => (
  <div className='container'>
    <HouseImage>
      <img src='/img/house0.png' className='house has-text-centered' />
      <img
        src='/img/house1.png'
        className='house has-text-centered p-b-20 m-r-64 scale3'
      />
      <img
        src='/img/house2.png'
        className='house has-text-centered p-b-32 m-r-64 scale6'
      />
      <img src='/img/house3.png' className='house has-text-centered' />
      <img src='/img/4houses.jpg' className='mobileHouses' />
    </HouseImage>

  </div>
)

export default Houses
