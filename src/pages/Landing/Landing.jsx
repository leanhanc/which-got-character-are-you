import React from 'react';
import PropTypes from 'prop-types';

// Components
import { CtaButton, Header, Houses, Ornaments, UserOptions } from './components';

// Styles
import './Landing.css';

function Landing({ lang, theme }) {
  return (
    <main id="landing">
      <Ornaments theme={theme} />
      <Header />
      <Houses theme={theme} />
      <CtaButton />
      <UserOptions />
    </main>
  );
}

Landing.propTypes = {
  lang: PropTypes.string,
  theme: PropTypes.string,
};

export default Landing;
