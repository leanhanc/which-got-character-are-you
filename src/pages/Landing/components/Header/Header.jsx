import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Header.css';

// Locale
import locale from '../../../../data/locale';

function Header({ lang }) {
  return (
    <header id="header">
      <h2 className="header-pre-header">{locale[lang].landing.preHeader}</h2>
      <h1 className="header-main-header">GAME OF THRONES</h1>
      <h3 className="header-sub-header">{locale[lang].landing.subHeader}</h3>
    </header>
  );
}

Header.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Header;
