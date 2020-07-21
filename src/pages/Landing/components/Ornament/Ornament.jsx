import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Ornament.css';

// Assets
import ornamentLight from '../../../../assets/images/ornament-light.svg';
import ornamentDark from '../../../../assets/images/ornament-dark.svg';

// Enums
import { THEME } from '../../../../utils/enums';

function Ornament({ theme, type }) {
  if (theme === THEME.DARK) {
    return <img src={ornamentLight} alt="Ornament" className={`ornament ${type}`} />;
  }
  return <img src={ornamentDark} alt="Ornament" className={`ornament ${type}`} />;
}

Ornament.propTypes = {
  theme: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['top-right', 'top-left', 'bottom-left', 'bottom-right']).isRequired,
};

export default Ornament;
