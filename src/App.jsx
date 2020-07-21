import React, { useReducer } from 'react';

// Reducers
import { initialState, appConfigActions, appConfigReducer } from './reducers/appConfig';

// Pages
import Router from './router/Router';

function App() {
  // State
  const [appUserSettings, dispatchUserSetting] = useReducer(appConfigReducer, initialState);

  // Handlers
  const toggleLangHandler = () => dispatchUserSetting({ type: appConfigActions.TOGGLE_LANG });
  const toggleThemeHandler = () => dispatchUserSetting({ type: appConfigActions.TOGGLE_THEME });

  return (
    <div className="App">
      <Router lang={appUserSettings.lang} theme={appUserSettings.theme} />
    </div>
  );
}

export default App;
