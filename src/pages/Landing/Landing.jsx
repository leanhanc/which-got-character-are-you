import React from 'react';
import PropTypes from 'prop-types';

// Enums
import { LANG } from '../../utils/enums';

// Styles
import './Landing.css';

function Landing({ lang }) {
  return (
    <header id="landing">
      <h2 className="landing-pre-header">QUIEN SOS EN</h2>
      <h1 className="landing-header">GAME OF THRONES</h1>
      <h3 className="landing-sub-header">HACE EL TEST Y ENTERATE</h3>
    </header>
  );
}

Landing.propTypes = {
  lang: PropTypes.string,
};

export default Landing;
