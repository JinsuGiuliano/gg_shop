import { createSelector } from 'reselect';
import { UserState } from './user.reducer';

import { RootState } from '../store';
const selectUser = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
