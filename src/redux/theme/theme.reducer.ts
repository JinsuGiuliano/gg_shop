import { AnyAction } from 'redux';
import { TOGGLE_TYPE, ThemeAction, toggleDarkTheme } from './theme.action';

export type ThemeState = {
  readonly darkThemeEnabled: boolean;
}
export const THEME_INITIAL_STATE: ThemeState = { 
    darkThemeEnabled: false 
}

export const themeReducer = (state = THEME_INITIAL_STATE, action: AnyAction) => {
    if(toggleDarkTheme.match(action)){
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled }
    }

   return {...state}
};