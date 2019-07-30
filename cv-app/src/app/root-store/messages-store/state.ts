import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Message } from '../../models/message';
import { Account } from '../../models/account';

export const messageAdapter: EntityAdapter<Message> =
createEntityAdapter<Message>({
    selectId: model => model.id,
    sortComparer: false
});

export interface MessageState extends EntityState<Message> {
    isLoading?: boolean;
    error?: string;
}

export const initialMessageState: MessageState = messageAdapter.getInitialState({
    isLoading: false,
    error: null
});

export const usersAdapter: EntityAdapter<Account> =
createEntityAdapter<Account>({
    selectId: model => model.email,
    sortComparer: false
});

export interface UserListState extends EntityState<Account> {
    isLoading?: boolean;
    error?: string;
}

export const initialUserListState: UserListState = usersAdapter.getInitialState({
    isLoading: false,
    error: null
});

