import { initialMessageState, State, messageAdapter } from './state';
import { Action, createReducer, on } from '@ngrx/store';
import * as messageActions from './actions';

const messagesReducer = createReducer(
    initialMessageState,
    on(messageActions.GetMessagesSuccessAction, (state, { messages } ) => messageAdapter.addAll(messages, state)),
    on(messageActions.MarkMessageReadAction, (state, { message } ) => messageAdapter.updateOne(message, state)),
    on(messageActions.GetMessagesFailureAction, ((state, { error } ) => ({
        ...state,
        error
      })))
  );

export function reducer(state: State | undefined, action: Action) {
    return messagesReducer(state, action);
  }
