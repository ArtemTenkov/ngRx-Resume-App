import { createAction, props } from '@ngrx/store';
import { Message } from '../../models/message';
import { Update } from '@ngrx/entity';

export const GetMessagesRequestAction = createAction('[Messages] Messages Requested',
props<{ userId: string}>());

export const GetMessagesSuccessAction = createAction('[Messages] Messages Received',
props<{ messages: Message[]}>());

export const GetMessagesFailureAction = createAction('[Messages] Messages Retrieval failed',
props<{ error: string}>());

export const MarkMessageReadAction = createAction('[Messsages] Message Has been read',
props<{ message: Update<Message> }>());
