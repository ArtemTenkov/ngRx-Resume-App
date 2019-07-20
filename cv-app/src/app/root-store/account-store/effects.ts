import { AccountService } from 'src/app/data-providers/account.service';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs';
import * as accountActions from './actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Account } from 'src/app/models/account';

export class AccountStoreEffects {
  constructor(private dataService: AccountService, private $actions: Actions) { }

  accountRequestEffect = createEffect(() =>
  this.$actions.pipe(
    ofType(accountActions.AccountInfoRequestedAction),
    switchMap((action: any) => this.dataService.get(action.email)
    .pipe(
      map(response => accountActions.AccountInfoSuccessAction(
        {account: Account.adapt(response)}
     )),
      catchError(error => {
        return observableOf(accountActions.AccountInfoFailedAction({
          errorMessage: error
        }));
      })
    )
  )));


}
