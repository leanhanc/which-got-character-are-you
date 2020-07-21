import React from 'react';
import PropTypes from 'prop-types';

// Components
import Ornament from '../Ornament/Ornament';

const Ornaments = ({ theme }) => {
  return (
    <>
      <Ornament theme={theme} type="topLeft" />
      <Ornament theme={theme} type="topRight" />
      <Ornament theme={theme} type="bottomLeft" />
      <Ornament theme={theme} type="bottomRight" />
    </>
  );
};

Ornaments.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Ornaments;
