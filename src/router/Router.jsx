import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import { Landing, Game } from '../pages';

function Router({ lang, theme, toggleLang, toggleTheme }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Landing lang={lang} theme={theme} toggleTheme={toggleTheme} toggleLang={toggleLang} />
          }
        />
        <Route path="/game" element={<Game lang={lang} />} />
      </Routes>
    </BrowserRouter>
  );
}

Router.propTypes = {
  lang: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  toggleLang: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Router;
