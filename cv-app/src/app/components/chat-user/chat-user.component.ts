import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../../models/account';
import { Action } from '@ngrx/store';
import {
  MessagesActions,
} from '../../root-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.scss']
})
export class ChatUserComponent implements OnInit {
  @Input()
  public user: Account;
  @Output()
  actionsEmitted: EventEmitter<Action[]> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectUser() {
    this.router.navigate(['/messages/' + this.user.email]);
  }

}
