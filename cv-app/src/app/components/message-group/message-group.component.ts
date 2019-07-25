import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-message-group',
  templateUrl: './message-group.component.html',
  styleUrls: ['./message-group.component.scss']
})
export class MessageGroupComponent implements OnInit {
  @Input()
  public message: Message;
  constructor() { }

  ngOnInit() {
  }

}
