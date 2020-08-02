import React from 'react';
import PropTypes from 'prop-types';

// Locale
import data from '../../../../data/locale';

// Components
import { OptionButton } from '../../../../components';

// Styles
import './NavButtons.css';

function NavButtons({ lang, restartGame }) {
  return (
    <ul className="nav-buttons">
      <li className="nav-button">
        <OptionButton onClick={restartGame}>{data[lang].postgame.restart}</OptionButton>
      </li>
      <li className="nav-button">
        <OptionButton>{data[lang].postgame.shareInTwitter}</OptionButton>
      </li>
    </ul>
  );
}

NavButtons.propTypes = {
  lang: PropTypes.string.isRequired,
  restartGame: PropTypes.func.isRequired,
};

export default NavButtons;
