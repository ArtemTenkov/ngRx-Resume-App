import { ILoginForm } from 'src/app/models/login-form';
import { FormGroupState } from 'ngrx-forms';
import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { Action } from '@ngrx/store';

import {
  AuthenticationActions,
} from '../../root-store';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  @Input() form: FormGroupState<ILoginForm>;
  @Output() actionsEmitted: EventEmitter<Action[]> = new EventEmitter();

  constructor() { }

  submit() {
    if (this.form.isValid) {
      this.actionsEmitted.emit([AuthenticationActions.ValueSubmittedAction({
        submittedValue: this.form
      })]);
    }
  }
}
