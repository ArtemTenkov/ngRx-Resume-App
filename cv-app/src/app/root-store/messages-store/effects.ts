import { MessagesService } from 'src/app/data-providers/messages.service';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import * as messageActions from './actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Message } from 'src/app/models/message';

export class MessagesStoreEffect {
    constructor(private dataService: MessagesService, private $actions: Actions) { }

    messageRequestEffect = createEffect(() =>
    this.$actions.pipe(
        ofType(messageActions.GetMessagesRequestAction),
        switchMap((action: any) => this.dataService.list(action.userId)
        .pipe(map(response => messageActions.GetMessagesSuccessAction({messages: response})),
        catchError(error => {
          return observableOf(messageActions.GetMessagesFailureAction({
            error
          }));
        }))
        )
    ));
}
