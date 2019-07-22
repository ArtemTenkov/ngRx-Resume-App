import {
  createFeatureSelector,
  createSelector} from '@ngrx/store';

import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateModel } from '../models/root-url';

const getUrlState = (state: RouterReducerState<RouterStateModel>): any => state.state.params.email;

export const selectReducerState = createFeatureSelector<
  RouterReducerState<RouterStateModel>
>('router');

export const getUserIdFromRouter = createSelector(
  selectReducerState,
  getUrlState
);
