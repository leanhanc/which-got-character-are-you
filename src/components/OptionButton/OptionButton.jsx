import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './OptionButton.css';

const VARIANT = {
  primary: 'primary',
  secondary: 'secondary',
};

function OptionButton({ children, onClick, variant }) {
  if (variant === VARIANT.secondary) {
    return (
      <button className="option-button secondary" onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button className="option-button" onClick={onClick}>
      {children}
    </button>
  );
}

OptionButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

OptionButton.defaultProps = {
  variant: 'primary',
};

export default OptionButton;
