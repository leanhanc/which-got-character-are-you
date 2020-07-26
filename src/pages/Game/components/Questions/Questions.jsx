import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Questions.css';

function Questions({ currentAnswer, currentQuestion }) {
  return (
    <div className="questions">
      <h3 className="questions-question slide-in-left">{currentQuestion}</h3>
      <p className="questions-answers slide-in-right">{currentAnswer}</p>
    </div>
  );
}

Questions.propTypes = {
  currentAnswer: PropTypes.string.isRequired,
  currentQuestion: PropTypes.string.isRequired,
};

export default Questions;
