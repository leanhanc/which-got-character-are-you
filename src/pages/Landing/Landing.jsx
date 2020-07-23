import React from 'react';
import PropTypes from 'prop-types';

// Components
import { CtaButton, Header, Houses, Ornaments, UserOptions } from './components';

// Styles
import './Landing.css';

function Landing({ lang, theme, toggleLang, toggleTheme }) {
  return (
    <main id="landing">
      <Ornaments theme={theme} />
      <Header />
      <Houses theme={theme} />
      <CtaButton lang={lang} />
      <UserOptions lang={lang} theme={theme} toggleLang={toggleLang} toggleTheme={toggleTheme} />
    </main>
  );
}

Landing.propTypes = {
  lang: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  toggleLang: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Landing;
