import { createAction, props } from '@ngrx/store';
import { Message } from '../../models/message';
import { Account } from '../../models/account';

export const GetFriendsListRequestAction = createAction('[Users] User List Requested');

export const GetFriendsListSuccessAction = createAction('[Users] User List Received',
props<{ users: Account[]}>());

export const GetFriendsListFailureAction = createAction('[Users] User List Retrieval failed',
props<{ error: string}>());

export const GetMessagesRequestAction = createAction('[Messages] Messages Requested',
props<{ userId: string}>());

export const GetMessagesSuccessAction = createAction('[Messages] Messages Received',
props<{ messages: Message[]}>());

export const GetMessagesFailureAction = createAction('[Messages] Messages Retrieval failed',
props<{ error: string}>());

