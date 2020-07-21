import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Header, Houses, Ornament } from './components';

// Styles
import './Landing.css';

function Landing({ lang, theme }) {
  return (
    <main id="landing">
      <Ornament theme={theme} type="topLeft" />
      <Ornament theme={theme} type="topRight" />
      <Ornament theme={theme} type="bottomLeft" />
      <Ornament theme={theme} type="bottomRight" />
      <Header />
      <Houses theme={theme} />
    </main>
  );
}

Landing.propTypes = {
  lang: PropTypes.string,
  theme: PropTypes.string,
};

export default Landing;
