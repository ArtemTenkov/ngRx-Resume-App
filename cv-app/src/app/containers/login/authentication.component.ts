import { Component, OnInit } from '@angular/core';
import { Store, select, Action, ScannedActionsSubject } from '@ngrx/store';
import { Observable, } from 'rxjs';
import { map, take, filter } from 'rxjs/operators';
import {
  RootStoreState,
  AuthenticationSelectors,
  AuthenticationActions
} from '../../root-store';
import { ILoginForm } from 'src/app/models/login-form';
import { FormGroupState } from 'ngrx-forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ofType } from '@ngrx/effects';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class AuthenticationComponent implements OnInit {

  public loginForm$: Observable<FormGroupState<ILoginForm>>;

  constructor(private store$: Store<RootStoreState.RootState>,
              actions$: ScannedActionsSubject,
              private snackBar: MatSnackBar) {

    this.loginForm$ = this.store$.select(AuthenticationSelectors.selectLoginFormState);
    actions$.pipe(ofType(AuthenticationActions.LoginFailedAction))
      .subscribe(errorAction => {
        snackBar.open(errorAction.errorMessage,
          'Login failed', {
            duration: 2000
          });
      });
   }

  onFormActions($event: Action[]) {
    const actions = $event;
    actions.forEach(this.store$.dispatch.bind(this.store$));
  }

  ngOnInit() {
  }

}
