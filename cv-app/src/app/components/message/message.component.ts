import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Message } from 'src/app/models/message';
import {
  MessagesActions,
} from '../../root-store';
import { Store, Action } from '@ngrx/store';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input()
  public message: Message;
  @Output() 
  actionsEmitted: EventEmitter<Action[]> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  readMessage(messageId: string) {
    this.actionsEmitted.emit([MessagesActions.MarkMessageReadAction({ message: {id: messageId, changes: {
      ...this.message,
      read: true
    }}})]);
  }
}
