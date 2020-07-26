import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './OptionButton.css';

function OptionButton({ children, onClick }) {
  return (
    <button className="option-button" onClick={onClick}>
      {children}
    </button>
  );
}

OptionButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

export default OptionButton;
