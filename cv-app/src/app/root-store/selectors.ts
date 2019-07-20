import {
  createFeatureSelector,
  createSelector} from '@ngrx/store';

import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '../models/root-url';

const getUrlState = (state: RouterReducerState<RouterStateUrl>): any => state.state.params.email;

export const selectReducerState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>('router');

export const getUserIdFromRouter = createSelector(
  selectReducerState,
  getUrlState
);
