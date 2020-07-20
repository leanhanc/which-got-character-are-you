import React, { useReducer } from 'react';

// Reducers
import { initialState, appConfigActions, appConfigReducer } from './reducers/appConfig';

// Pages
import { Landing } from './pages';

function App() {
  // State
  const [appUserSettings, dispatchUserSetting] = useReducer(appConfigReducer, initialState);

  // Handlers
  const toggleLangHandler = () => dispatchUserSetting({ type: appConfigActions.TOGGLE_LANG });
  const toggleThemeHandler = () => dispatchUserSetting({ type: appConfigActions.TOGGLE_THEME });

  return (
    <div className="App">
      <Landing lang={appUserSettings.lang} />
      <div>
        <button onClick={toggleLangHandler}>CAMBIAR IDIOMA</button>
        <button onClick={toggleThemeHandler}>CAMBIAR THEME</button>
      </div>
    </div>
  );
}

export default App;
