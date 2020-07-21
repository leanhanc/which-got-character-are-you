import React from 'react';
import PropTypes from 'prop-types';

//Assets
import houseBaratheon from '../../../../assets/images/house-baratheon.png';
import houseLannister from '../../../../assets/images/house-lannister.png';
import houseStark from '../../../../assets/images/house-stark.png';
import houseTargaryen from '../../../../assets/images/house-targaryen.png';
import houseBaratheonDark from '../../../../assets/images/house-baratheon-dark.png';
import houseLannisterDark from '../../../../assets/images/house-lannister-dark.png';
import houseStarkDark from '../../../../assets/images/house-stark-dark.png';
import houseTargaryenDark from '../../../../assets/images/house-targaryen-dark.png';

// Styles
import './Houses.css';

// Enums
import { THEME } from '../../../../utils/enums';

function Houses({ theme }) {
  return (
    <div id="Houses" className="houses">
      <img src={theme === THEME.DARK ? houseBaratheon : houseBaratheonDark} alt="House Baratheon" />
      <img src={theme === THEME.DARK ? houseTargaryen : houseTargaryenDark} alt="House Targaryen" />
      <img src={theme === THEME.DARK ? houseStark : houseStarkDark} alt="House Stark" />
      <img src={theme === THEME.DARK ? houseLannister : houseLannisterDark} alt="House Lannister" />
    </div>
  );
}

Houses.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Houses;
