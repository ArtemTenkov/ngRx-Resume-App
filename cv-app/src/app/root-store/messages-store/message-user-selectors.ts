import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Account } from '../../models/account';
import { usersAdapter, UserListState } from './state';

export const getError = (state: UserListState): any => state.error;
export const getIsLoading = (state: UserListState): any => state.isLoading;

export const selectUsersState = createFeatureSelector<UserListState>('users');
export const selectAllUsers: (state: object) => Account[] = usersAdapter.getSelectors(selectUsersState).selectAll;

export const selectGetUserByEmail = (email: string) =>
createSelector(this.selectAllUsers, (allUsers: Account[]) => {
  if (allUsers) {
    return allUsers.find(m => m.email === email);
  } else {
    return null;
  }
});

export const selectMessagesError = createSelector(selectUsersState, getError);
export const selectMessagesLoading = createSelector(selectUsersState, getIsLoading);
