import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

// Reducer
import { gameActions } from '../../reducers/game.js';

// Components
import { Questions, ButtonPanel } from './components';
import { Line } from 'rc-progress';

// Locale
import data from '../../data/locale';

// Helpers
import {
  cerseiAnswers,
  daenerysAnswers,
  lastAnswerOfStep,
  jonAnswers,
  petyrAnswers,
  totalAnswers,
  tyrionsAnswers,
} from './Game.helpers';

// Styles
import './Game.css';

function Game({ lang, gameStateHandler, answer, step }) {
  // Helpers
  const currentQuestionText = useMemo(() => data[lang].questions[step], [step, lang]);

  const currentAnswerText = useMemo(() => {
    return data[lang].answers?.[step]?.[answer - step * 6] || '';
  }, [answer, step, lang]);

  const currentGameProgress = useMemo(() => {
    return (answer * 100) / totalAnswers;
  }, [answer]);

  // Handlers
  const handleUserAnswer = (answerType = '') => {
    if (lastAnswerOfStep.includes(answer)) gameStateHandler({ type: gameActions.INCREMENT_STEP });

    if (answer <= totalAnswers - 1) {
      gameStateHandler({ type: gameActions.INCREMENT_ANSWER });
    }

    if (jonAnswers.includes(answer)) {
      gameStateHandler({ type: gameActions[`JON_${answerType}`] });
      return;
    }
    if (tyrionsAnswers.includes(answer)) {
      gameStateHandler({ type: gameActions[`TYRION_${answerType}`] });
      return;
    }
    if (daenerysAnswers.includes(answer)) {
      gameStateHandler({ type: gameActions[`DAENERYS_${answerType}`] });
      return;
    }
    if (cerseiAnswers.includes(answer)) {
      gameStateHandler({ type: gameActions[`CERSEI_${answerType}`] });
      return;
    }
    if (petyrAnswers.includes(answer)) {
      gameStateHandler({ type: gameActions[`PETYR_${answerType}`] });
      return;
    }

    gameStateHandler({ type: gameActions[`SANSA_${answerType}`] });
  };

  return (
    <section id="Game" className="game">
      <header>
        <h2 className="header-pre-header">{data[lang].preHeader}</h2>
        <h1 className="header-main-header">GAME OF THRONES</h1>
      </header>
      <Questions
        currentAnswerIndex={answer}
        currentAnswerText={currentAnswerText ?? ''}
        currentQuestionText={currentQuestionText ?? ''}
      />
      <ButtonPanel handleUserAnswer={handleUserAnswer} />
      <Line className="game-progress-bar" strokeColor="#a06906" percent={currentGameProgress} />
    </section>
  );
}

Game.propTypes = {
  answer: PropTypes.number.isRequired,
  gameStateHandler: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};

export default Game;
