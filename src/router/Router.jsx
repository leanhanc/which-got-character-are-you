import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import { Landing } from '../pages';

function Router({ lang, theme }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing lang={lang} theme={theme} />} />
      </Routes>
    </BrowserRouter>
  );
}

Router.propTypes = {
  lang: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Router;
