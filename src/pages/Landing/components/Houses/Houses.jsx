import React from 'react';

//Assets
import houseBaratheon from '../../../../assets/images/house-baratheon.png';
import houseLannister from '../../../../assets/images/house-lannister.png';
import houseStark from '../../../../assets/images/house-stark.png';
import houseTargaryen from '../../../../assets/images/house-targaryen.png';

// Styles
import './Houses.css';

function Houses() {
  return (
    <div id="Houses" className="houses">
      <img src={houseBaratheon} alt="House Baratheon" />
      <img src={houseTargaryen} alt="House Targaryen" />
      <img src={houseStark} alt="House Stark" />
      <img src={houseLannister} alt="House Lannister" />
    </div>
  );
}

export default Houses;
