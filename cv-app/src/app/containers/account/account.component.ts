import { Component, OnInit } from '@angular/core';
import { Store, select, Action } from '@ngrx/store';
import { Observable, } from 'rxjs';
import { Account } from 'src/app/models/account';
import {
  RootStoreState,
  AccountSelectors,
  AccountActions,
  RootSelectors
} from '../../root-store';
import { RouterStateUrl } from 'src/app/models/root-url';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public account$: Observable<Account>;
  public userId: string;

  constructor(private store$: Store<RootStoreState.RootState>) {
    this.store$.select(RootSelectors.getUserIdFromRouter).subscribe(id => this.userId = id);
    store$.dispatch(AccountActions.AccountInfoRequestedAction({email: this.userId}));
  }

  ngOnInit() {
    this.account$ = this.store$.select(AccountSelectors.selectAccountState);
  }

}
