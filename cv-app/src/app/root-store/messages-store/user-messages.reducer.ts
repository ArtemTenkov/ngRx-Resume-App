import { initialUserListState, UserListState, usersAdapter } from './state';
import { Action, createReducer, on } from '@ngrx/store';
import * as userActions from './actions';

const messagesReducer = createReducer(
    initialUserListState,
    on(userActions.GetFriendsListSuccessAction, (state, { users } ) => usersAdapter.addAll(users, state)),
    on(userActions.GetFriendsListFailureAction, ((state, { error } ) => ({
        ...state,
        error
      })))
  );

export function reducer(state: UserListState | undefined, action: Action) {
    return messagesReducer(state, action);
  }
