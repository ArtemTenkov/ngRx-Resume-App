import { Component, OnInit } from '@angular/core';
import { Store, Action, ScannedActionsSubject, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message';
import {
  RootStoreState,
  MessagesSelectors,
  MessagesActions} from '../../root-store';
import { map, distinct } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ofType } from '@ngrx/effects';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public messages$: Observable<Message[]>;
  public unreadMessages$: Observable<Message[]>;
  public messageGroups$: Observable<Message[]>;

  constructor(private store$: Store<RootStoreState.RootState>,
              actions$: ScannedActionsSubject,
              private snackBar: MatSnackBar) {
    this.store$.dispatch(MessagesActions.GetMessagesRequestAction({ userId: 'user'}));

    actions$.pipe(ofType(MessagesActions.GetMessagesFailureAction))
      .subscribe(errorAction => {
        snackBar.open(errorAction.error,
          'Unknown error', {
            duration: 2000
          });
      });
  }

  private removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  ngOnInit() {
    this.messages$ = this.store$.select(MessagesSelectors.selectAllMessages);
    this.unreadMessages$ = this.messages$.pipe(map(mess => mess.filter(m => !m.read)));
    this.messageGroups$ = this.messages$.pipe(map(mess => this.removeDuplicates(mess, 'sendersName')));
  }

  onChildrenActions($event: Action[]) {
    const actions = $event;
    actions.forEach(this.store$.dispatch.bind(this.store$));
  }
}
