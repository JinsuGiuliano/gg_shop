import { createSelector } from 'reselect';
import { RootState } from '../store';
import { ThemeState } from './theme.reducer';

const selectTheme = (state: RootState): ThemeState => state.theme;

export const selectCurrentTheme = createSelector(
  [selectTheme],
  (theme) =>  theme.darkThemeEnabled
);