import { initialState, State } from './state';
import { Action, createReducer, on } from '@ngrx/store';
import * as accountActions from './actions';

const accountReducer = createReducer(
  initialState,
  on(accountActions.AccountInfoSuccessAction, ((state, { account }) => ({
    ...state,
    account
  })))
);

export function reducer(state: State | undefined, action: Action) {
  return accountReducer(state, action);
}
