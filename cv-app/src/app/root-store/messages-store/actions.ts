import { createAction, props } from '@ngrx/store';
import { Message } from '../../models/message';

export const GetMessagesRequestAction = createAction('[Messages] Messages Requested',
props<{ userId: string}>());

export const GetMessagesSuccessAction = createAction('[Messages] Messages Received',
props<{ messages: Message[]}>());

export const GetMessagesFailureAction = createAction('[Messages] Messages Retrieval failed',
props<{ error: string}>());
