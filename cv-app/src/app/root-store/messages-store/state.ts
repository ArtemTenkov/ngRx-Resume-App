import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Message } from '../../models/message';

export const messageAdapter: EntityAdapter<Message> =
createEntityAdapter<Message>({
    selectId: model => model.id,
    sortComparer: false
});

export interface State extends EntityState<Message> {
    isLoading?: boolean;
    error?: string;
}

export const initialMessageState: State = messageAdapter.getInitialState({
    isLoading: false,
    error: null
});
