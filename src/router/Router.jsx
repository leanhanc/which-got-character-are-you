import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import { Landing, Game } from '../pages';

function Router({ answer, lang, theme, gameStateHandler, step, toggleLang, toggleTheme }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Landing lang={lang} theme={theme} toggleTheme={toggleTheme} toggleLang={toggleLang} />
          }
        />
        <Route
          path="/game"
          element={
            <Game answer={answer} step={step} gameStateHandler={gameStateHandler} lang={lang} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

Router.propTypes = {
  answer: PropTypes.number.isRequired,
  gameStateHandler: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
  toggleLang: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Router;
