import React from 'react';
import PropTypes from 'prop-types';

// Enums
import { LANG } from '../../utils/enums';

const Landing = ({ lang }) => {
  return <header id="Landing">{lang === LANG.ES ? 'Hola' : 'Hello'}</header>;
};

Landing.propTypes = {
  lang: PropTypes.string,
};

export default Landing;
