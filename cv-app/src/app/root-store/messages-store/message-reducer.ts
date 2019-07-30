import { initialMessageState, MessageState, messageAdapter } from './state';
import { Action, createReducer, on } from '@ngrx/store';
import * as messageActions from './actions';

const messagesReducer = createReducer(
    initialMessageState,
    on(messageActions.GetMessagesSuccessAction, (state, { messages } ) => messageAdapter.addAll(messages, state)),
    on(messageActions.GetMessagesFailureAction, ((state, { error } ) => ({
        ...state,
        error
      })))
  );

export function reducer(state: MessageState | undefined, action: Action) {
    return messagesReducer(state, action);
  }
