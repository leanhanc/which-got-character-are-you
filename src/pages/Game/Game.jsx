import React, { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

// Reducer
import { gameActions, gameReducer, initialState } from '../../reducers/game.js';

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

function Game({ lang }) {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  // Helpers
  const currentQuestionText = useMemo(() => data[lang].questions[gameState.step], [
    gameState.step,
    lang,
  ]);

  const currentAnswerText = useMemo(() => {
    return data[lang].answers?.[gameState.step]?.[gameState.answer - gameState.step * 6] || '';
  }, [gameState.answer, gameState.step, lang]);

  const currentGameProgress = useMemo(() => {
    return (gameState.answer * 100) / totalAnswers;
  }, [gameState.answer]);

  // Handlers
  const handleUserAnswer = (answerType = '') => {
    const { answer } = gameState;

    if (lastAnswerOfStep.includes(answer)) dispatch({ type: gameActions.INCREMENT_STEP });

    if (answer <= totalAnswers - 1) {
      dispatch({ type: gameActions.INCREMENT_ANSWER });
    }

    if (jonAnswers.includes(answer)) {
      dispatch({ type: gameActions[`JON_${answerType}`] });
      return;
    }
    if (tyrionsAnswers.includes(answer)) {
      dispatch({ type: gameActions[`TYRION_${answerType}`] });
      return;
    }
    if (daenerysAnswers.includes(answer)) {
      dispatch({ type: gameActions[`DAENERYS_${answerType}`] });
      return;
    }
    if (cerseiAnswers.includes(answer)) {
      dispatch({ type: gameActions[`CERSEI_${answerType}`] });
      return;
    }
    if (petyrAnswers.includes(answer)) {
      dispatch({ type: gameActions[`PETYR_${answerType}`] });
      return;
    }

    dispatch({ type: gameActions[`SANSA_${answerType}`] });
  };

  return (
    <section id="Game" className="game">
      <header>
        <h2 className="header-pre-header">{data[lang].preHeader}</h2>
        <h1 className="header-main-header">GAME OF THRONES</h1>
      </header>
      <Questions
        currentAnswerIndex={gameState.answer}
        currentAnswerText={currentAnswerText ?? ''}
        currentQuestionText={currentQuestionText ?? ''}
      />
      <ButtonPanel handleUserAnswer={handleUserAnswer} />
      <Line className="game-progress-bar" strokeColor="#a06906" percent={currentGameProgress} />
    </section>
  );
}

Game.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Game;
