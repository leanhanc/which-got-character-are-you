import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Houses, Ornament } from './components';

// Styles
import './Landing.css';

function Landing({ lang, theme }) {
  return (
    <header id="landing">
      <Ornament theme={theme} type="topLeft" />
      <Ornament theme={theme} type="topRight" />
      <Ornament theme={theme} type="bottomLeft" />
      <Ornament theme={theme} type="bottomRight" />
      <h2 className="landing-pre-header">QUIEN SOS EN</h2>
      <h1 className="landing-header">GAME OF THRONES</h1>
      <h3 className="landing-sub-header">HACE EL TEST Y ENTERATE</h3>
      <Houses theme={theme} />
    </header>
  );
}

Landing.propTypes = {
  lang: PropTypes.string,
  theme: PropTypes.string,
};

export default Landing;
