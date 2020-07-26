import React, { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

// Reducer
import { gameActions, gameReducer, initialState } from '../../reducers/game.js';

// Components
import { Questions, ButtonPanel } from './components';

// Locale
import data from '../../data/locale';

// Helpers
import {
  cerseiAnswers,
  daenerysAnswers,
  lastAnswerOfStep,
  petyrAnswers,
  sansaAnswers,
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

  const currentAnswerText = useMemo(
    () => data[lang].answers[gameState.step][gameState.answer - gameState.step * 6],
    [gameState.answer, gameState.step, lang],
  );

  // Handlers
  const handleUserAnswer = (answerType = '') => {
    const { answer } = gameState;

    if (lastAnswerOfStep.includes(answer)) dispatch({ type: gameActions.INCREMENT_STEP });

    if (tyrionsAnswers.includes(answer)) {
      dispatch({ type: gameActions[`TYRION_${answerType}`] });
      dispatch({ type: gameActions.INCREMENT_ANSWER });
      return;
    }
    if (daenerysAnswers.includes(answer)) {
      dispatch({ type: gameActions[`DAENERYS_${answerType}`] });
      dispatch({ type: gameActions.INCREMENT_ANSWER });
      return;
    }
    if (cerseiAnswers.includes(answer)) {
      dispatch({ type: gameActions[`CERSEI_${answerType}`] });
      dispatch({ type: gameActions.INCREMENT_ANSWER });
      return;
    }
    if (petyrAnswers.includes(answer)) {
      dispatch({ type: gameActions[`PETYR_${answerType}`] });
      dispatch({ type: gameActions.INCREMENT_ANSWER });
      return;
    }
    if (sansaAnswers.includes(answer)) {
      dispatch({ type: gameActions[`SANSA_${answerType}`] });
      dispatch({ type: gameActions.INCREMENT_ANSWER });
      return;
    }

    dispatch({ type: gameActions[`JON_${answerType}`] });
    dispatch({ type: gameActions.INCREMENT_ANSWER });
  };

  return (
    <section id="Game" className="game">
      <header>
        <h2 className="header-pre-header">{data[lang].preHeader}</h2>
        <h1 className="header-main-header">GAME OF THRONES</h1>
      </header>
      <Questions currentQuestion={currentQuestionText} currentAnswer={currentAnswerText} />
      <ButtonPanel handleUserAnswer={handleUserAnswer} />
    </section>
  );
}

Game.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Game;
