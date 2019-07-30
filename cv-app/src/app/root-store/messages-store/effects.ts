import { MessagesService } from 'src/app/data-providers/messages.service';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import * as messageActions from './actions';
import { switchMap, map, catchError } from 'rxjs/operators';

export class MessagesStoreEffect {
    constructor(private dataService: MessagesService, private $actions: Actions) { }

  usersRequestEffect = createEffect(() =>
  this.$actions.pipe(
      ofType(messageActions.GetFriendsListRequestAction),
      switchMap((action: any) => this.dataService.userList()
      .pipe(map(response => messageActions.GetFriendsListSuccessAction({users: response})),
      catchError(error => {
        return observableOf(messageActions.GetFriendsListFailureAction({
          error: error.message
        }));
      }))
      )
  ));

    messageRequestEffect = createEffect(() =>
    this.$actions.pipe(
        ofType(messageActions.GetMessagesRequestAction),
        switchMap((action: any) => this.dataService.getMessages(action.userId)
        .pipe(map(response => messageActions.GetMessagesSuccessAction({messages: response})),
        catchError(error => {
          return observableOf(messageActions.GetMessagesFailureAction({
            error: error.message
          }));
        }))
        )
    ));
}
