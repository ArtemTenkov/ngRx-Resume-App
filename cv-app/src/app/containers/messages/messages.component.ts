import { Component, OnInit } from '@angular/core';
import { Store, Action, ScannedActionsSubject, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';
import {
  RootStoreState,
  MessageUserSelectors,
  MessagesSelectors,
  MessagesActions,
  RootSelectors} from '../../root-store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ofType } from '@ngrx/effects';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public users$: Observable<Account[]>;

   public messages$: Observable<Message[]>;
   public selectedUser: Observable<Account>;
   public unreadMessages$: Observable<Message[]>;

  constructor(private store$: Store<RootStoreState.RootState>,
              actions$: ScannedActionsSubject,
              private snackBar: MatSnackBar) {
   this.store$.dispatch(MessagesActions.GetFriendsListRequestAction());
   this.store$.select(RootSelectors.getUserIdFromRouter).subscribe(id => {
      this.store$.dispatch(MessagesActions.GetMessagesRequestAction({userId: id}));
   });
   actions$.pipe(ofType(MessagesActions.GetMessagesFailureAction)).subscribe(this.errorHandler);
   actions$.pipe(ofType(MessagesActions.GetFriendsListFailureAction)).subscribe(this.errorHandler);
   }

  private errorHandler(errorAction) {
    this.snackBar.open(errorAction.error,
      'Unknown error', {
        duration: 2000
      });
  }

  ngOnInit() {
    this.users$ = this.store$.select(MessageUserSelectors.selectAllUsers);
    this.messages$ = this.store$.select(MessagesSelectors.selectAllMessages);
  }

  onChildrenActions($event: Action[]) {
    const actions = $event;
    actions.forEach(this.store$.dispatch.bind(this.store$));
  }
}
