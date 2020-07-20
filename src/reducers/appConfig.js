import { LANG, THEME } from '../utils/enums';

export const initialState = {
  theme: THEME.DARK,
  lang: LANG.ES,
};

export const appConfigActions = {
  TOGGLE_THEME: '@@appConfig/theme',
  TOGGLE_LANG: '@@appConfig/lang',
};

export function appConfigReducer(state, action) {
  switch (action.type) {
    case appConfigActions.TOGGLE_THEME:
      const theme = state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
      document.documentElement.setAttribute('data-theme', theme);
      return { ...state, theme };
    case appConfigActions.TOGGLE_LANG:
      return { ...state, lang: state.lang === LANG.ES ? LANG.EN : LANG.ES };
    default:
      throw new Error('[appConfig] Received invalid action type');
  }
}
