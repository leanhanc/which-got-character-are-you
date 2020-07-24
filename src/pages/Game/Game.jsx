import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Questions, ButtonPanel } from './components';

// Locale
import locale from '../../data/locale';

// Styles
import './Game.css';

function Game({ lang }) {
  return (
    <section id="Game" className="game">
      <header>
        <h2 className="header-pre-header">{locale[lang].preHeader}</h2>
        <h1 className="header-main-header">GAME OF THRONES</h1>
      </header>
      <Questions />
      <ButtonPanel />
    </section>
  );
}

Game.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Game;
