import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';


import { State } from './state';
const getLoginForm = (state: State): any => state.loginFormState;

export const selectLoginState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('login');

export const selectLoginFormState: MemoizedSelector<object, any> = createSelector(
  selectLoginState,
  getLoginForm
);
