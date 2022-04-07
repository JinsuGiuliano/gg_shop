import { createSelector } from 'reselect';

const selectValues = state => state.values;

export const selectValuesValues = createSelector(
  [selectValues],
  values => values.values
);
