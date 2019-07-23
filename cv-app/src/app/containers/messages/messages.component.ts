import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message';
import {
  RootStoreState,
  MessagesSelectors,
  MessagesActions,
  RootSelectors
} from '../../root-store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public messages$: Observable<Message[]>;
  public unreadMessages$: Observable<Message[]>;

  constructor(private store$: Store<RootStoreState.RootState>) {
    this.store$.dispatch(MessagesActions.GetMessagesRequestAction({ userId: 'user'}));
  }

  ngOnInit() {
    this.messages$ = this.store$.select(MessagesSelectors.selectAllMessages);
    this.unreadMessages$ = this.messages$.pipe(map(mess => mess.filter(m => !m.read)));
  }

  onChildrenActions($event: Action[]) {
    const actions = $event;
    actions.forEach(this.store$.dispatch.bind(this.store$));
  }
}
