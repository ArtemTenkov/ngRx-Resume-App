import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Message } from '../../models/message';
import { messageAdapter, State } from './state';

export const getError = (state: State): any => state.error;
export const getIsLoading = (state: State): any => state.isLoading;

export const selectMessagesState = createFeatureSelector<State>('messages');
export const selectAllMessages: (state: object) => Message[] = messageAdapter.getSelectors(selectMessagesState).selectAll;
export const selectMessageById = (id: number) =>
createSelector(this.selectAllMessages, (allMessages: Message[]) => {
  if (allMessages) {
    return allMessages.find(m => m.id === id);
  } else {
    return null;
  }
});

export const selectMessagesError = createSelector(selectMessagesState, getError);
export const selectMessagesLoading = createSelector(selectMessagesState, getIsLoading);
