import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Helpers
import { lastAnswerOfStep } from '../../Game.helpers';

// Styles
import './Questions.css';

function Questions({ currentAnswerText, currentQuestionText, currentAnswerIndex }) {
  const questionParagraphRef = useRef(null);
  const answerParagraphRef = useRef(null);

  useLayoutEffect(() => {
    const answerElement = answerParagraphRef.current;
    if ([...answerElement.classList].includes('fade-in')) {
      answerElement.classList.remove('fade-in');
    }
  }, []);

  useLayoutEffect(() => {
    const questionElement = questionParagraphRef.current;
    const answerElement = answerParagraphRef.current;

    if (lastAnswerOfStep.includes(currentAnswerIndex)) {
      questionElement.classList.remove('slide-in-left');
      answerElement.classList.remove('slide-in-right');

      return () => {
        questionElement.classList.add('slide-in-left');
        answerElement.classList.add('slide-in-right');
      };
    }
  }, [currentAnswerIndex]);

  return (
    <div className="questions">
      <h3 className="questions-question slide-in-left" ref={questionParagraphRef}>
        {currentQuestionText}
      </h3>
      <p className={`questions-answers slide-in-right`} ref={answerParagraphRef}>
        {currentAnswerText}
      </p>
    </div>
  );
}

Questions.propTypes = {
  currentAnswerText: PropTypes.string.isRequired,
  currentQuestionText: PropTypes.string.isRequired,
  currentAnswerIndex: PropTypes.number.isRequired,
};

export default Questions;
