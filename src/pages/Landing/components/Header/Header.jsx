import React from 'react';
// import PropTypes from 'prop-types'

// Styles
import './Header.css';

function Header() {
  return (
    <header id="header">
      <h2 className="header-pre-header">QUIEN SOS EN</h2>
      <h1 className="header-main-header">GAME OF THRONES</h1>
      <h3 className="header-sub-header">HACE EL TEST Y ENTERATE</h3>
    </header>
  );
}

Header.propTypes = {};

export default Header;
