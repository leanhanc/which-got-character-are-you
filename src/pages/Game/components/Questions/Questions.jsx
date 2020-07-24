import React from 'react';

// Styles
import './Questions.css';

function Questions() {
  return (
    <div className="questions">
      <h3 className="questions-question slide-in-left">
        Si alguien te dice que tu pareja te es infiel, ¿qué harías?
      </h3>
      <p className="questions-answers slide-in-right">
        Desestimaría la acusación porque confío en la persona que elegí.
      </p>
    </div>
  );
}

Questions.propTypes = {};

export default Questions;
