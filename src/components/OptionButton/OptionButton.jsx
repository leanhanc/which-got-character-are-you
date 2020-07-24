import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './OptionButton.css';

function OptionButton({ children }) {
  return <button className="option-button">{children}</button>;
}

OptionButton.propTypes = {
  children: PropTypes.node,
};

export default OptionButton;
