import {
  createFeatureSelector,
  createSelector} from '@ngrx/store';

import { State } from './state';

const getAccountDetails = (state: State): any => state.account;
export const accountSelector = createFeatureSelector<State>('account');

export const selectAccountState = createSelector(
  accountSelector,
  getAccountDetails
);
