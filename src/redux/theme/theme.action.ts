import { Action, createAction, withMatcher} from "../../utils/reducers/reducers.utils";
export enum TOGGLE_TYPE {
  TOGGLE_DARKTHEME="TOGGLE_DARKTHEME"
};

export type ToggleDarkTheme = Action<TOGGLE_TYPE.TOGGLE_DARKTHEME>;
export const toggleDarkTheme = withMatcher( (): ToggleDarkTheme => 
createAction(
  TOGGLE_TYPE.TOGGLE_DARKTHEME
  ));


export type ThemeAction = ToggleDarkTheme