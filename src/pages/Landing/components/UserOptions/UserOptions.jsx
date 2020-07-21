import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';

// Styles
import './UserOptions.css';

function Options(props) {
  return (
    <div className="options">
      <label>
        <Toggle
          className="switch-toggle"
          icons={{
            checked: <span className="sun" />,
            unchecked: null,
          }}
        />
      </label>
    </div>
  );
}

Options.propTypes = {};

export default Options;
