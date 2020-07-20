import React from 'react';
import PropTypes from 'prop-types';

// Enums
import { LANG } from '../../utils/enums';

// Styles
import './Landing.css';

function Landing({ lang }) {
  return (
    <header id="Landing">
      <h2 className="Landing-SmallHeader">QUIEN SOS</h2>
      <h1 className="Landing-Header">GAME OF THRONES</h1>
    </header>
  );
}

Landing.propTypes = {
  lang: PropTypes.string,
};

export default Landing;
