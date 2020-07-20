import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import { Landing } from '../pages';

function Router({ lang }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing lang={lang} />} />
      </Routes>
    </BrowserRouter>
  );
}

Router.propTypes = {
  lang: PropTypes.string,
};

export default Router;
