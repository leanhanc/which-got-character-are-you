import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import { CtaButton, Header, Houses, Ornaments, UserOptions } from './components';

// Styles
import './Landing.css';

function Landing({ lang, theme, toggleLang, toggleTheme }) {
  return (
    <main id="landing" className="fade-in">
      <Ornaments theme={theme} />
      <Header lang={lang} />
      <Houses theme={theme} />
      <Link to="/game">
        <CtaButton lang={lang} />
      </Link>
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
