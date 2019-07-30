import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Message } from '../../models/message';
import { messageAdapter, MessageState } from './state';

export const getError = (state: MessageState): any => state.error;
export const getIsLoading = (state: MessageState): any => state.isLoading;

export const selectMessagesState = createFeatureSelector<MessageState>('messages');
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
