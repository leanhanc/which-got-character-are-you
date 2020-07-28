import React, { useReducer } from 'react';

// Reducers
import {
  initialState as appConfigInitialState,
  appConfigActions,
  appConfigReducer,
} from './reducers/appConfig';
import { gameReducer, initialState as gameInitialState } from './reducers/game.js';

// Pages
import Router from './router/Router';

function App() {
  // State
  const [appUserSettings, dispatchUserSetting] = useReducer(
    appConfigReducer,
    appConfigInitialState,
  );
  const [gameState, gameStateHandler] = useReducer(gameReducer, gameInitialState);

  // Handlers
  const toggleLangHandler = () => dispatchUserSetting({ type: appConfigActions.TOGGLE_LANG });
  const toggleThemeHandler = () => dispatchUserSetting({ type: appConfigActions.TOGGLE_THEME });

  return (
    <div className="App">
      <Router
        answer={gameState.answer}
        gameStateHandler={gameStateHandler}
        lang={appUserSettings.lang}
        step={gameState.step}
        theme={appUserSettings.theme}
        toggleLang={toggleLangHandler}
        toggleTheme={toggleThemeHandler}
      />
    </div>
  );
}

export default App;
