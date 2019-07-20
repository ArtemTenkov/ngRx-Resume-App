import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../../data-providers/authentication.service';
import * as loginActions from './actions';
import { TokenResult } from 'src/app/models/token-result';
import { Router } from '@angular/router';
import { CookieStorageService } from 'src/app/data-providers/cookie-storage.service';

@Injectable()
export class LoginStoreEffects {
  constructor(private dataService: AuthenticationService, private $actions: Actions, private router: Router,
              private cookieStorage: CookieStorageService) { }


  loginRedirectionEffect = createEffect(() =>
   this.$actions.pipe(
    ofType(loginActions.LoggedInSuccesfullAction),
    tap(action => {
      this.cookieStorage.setToken(action.token);
      this.router.navigate(['/landing']);
    })
  ), {dispatch: false });


  logoutRedirectionEffect = createEffect(() =>
   this.$actions.pipe(
    ofType(loginActions.LogoutAction),
    tap(() => {
      this.cookieStorage.deleteToken();
      this.router.navigate(['/login']);
    } )
  ), {dispatch: false});

  loginRequestEffect$  = createEffect(() => this.$actions.pipe(
    ofType(loginActions.ValueSubmittedAction),
    switchMap(action => this.dataService.post(action.submittedValue.controls.email.value,
      action.submittedValue.controls.password.value)
    .pipe(
      map(token => loginActions.LoggedInSuccesfullAction(TokenResult.adapt(token))),
      catchError(eror => {
          console.log(eror);
          return observableOf(loginActions.LoginFailedAction({errorMessage: eror.error.errorMessage}));
      })
      )
    )
  ));
}
