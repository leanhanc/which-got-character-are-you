import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './UserOptions.css';

// Assets
import cross from '../../../../assets/images/cross.png';

// Enums
import { LANG, THEME } from '../../../../utils/enums';

function SelectedOptionIcon() {
  return <img src={cross} className="user-options__selected-option-icon" alt="Selected Option" />;
}

function UserOptions({ lang, theme, toggleLang, toggleTheme }) {
  // Helpers
  const isDarkThemeActive = theme === THEME.DARK;
  const isEnglishActive = lang === LANG.EN;

  // Handlers
  const setEnglish = () => {
    if (!isEnglishActive) toggleLang();
  };
  const setSpanish = () => {
    if (isEnglishActive) toggleLang();
  };
  const setDark = () => {
    if (!isDarkThemeActive) {
      toggleTheme();
    }
  };
  const setLight = () => {
    if (isDarkThemeActive) toggleTheme();
  };

  return (
    <div id="UserOptions" className="user-options">
      <div>
        <span className="user-options__option-name">
          {isEnglishActive ? 'LANGUAGE:' : 'IDIOMA:'}{' '}
        </span>
        <span
          className={`user-options__option-item${isEnglishActive ? '--active' : ''}`}
          onClick={setEnglish}
        >
          ENGLISH {isEnglishActive && <SelectedOptionIcon />}{' '}
        </span>
        <span
          className={`user-options__option-item${isEnglishActive ? '' : '--active'}`}
          onClick={setSpanish}
        >
          - ESPAÑOL {!isEnglishActive && <SelectedOptionIcon />}
        </span>
      </div>

      <div>
        <span className="user-options__option-name">{lang === LANG.EN ? 'THEME:' : 'TEMA:'} </span>
        <span
          className={`user-options__option-item${isDarkThemeActive ? '' : '--active'}`}
          onClick={setLight}
        >
          {isEnglishActive ? 'LIGHT' : 'CLARO'} {!isDarkThemeActive && <SelectedOptionIcon />}
        </span>
        <span
          className={`user-options__option-item${isDarkThemeActive ? '--active' : ''}`}
          onClick={setDark}
        >
          {' '}
          - {isEnglishActive ? 'DARK' : 'OSCURO'} {isDarkThemeActive && <SelectedOptionIcon />}
        </span>
      </div>
    </div>
  );
}

UserOptions.propTypes = {
  lang: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  toggleLang: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default UserOptions;
