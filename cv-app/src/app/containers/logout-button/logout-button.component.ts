import { Component, OnInit } from '@angular/core';
import { RootStoreState, AuthenticationActions } from 'src/app/root-store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-logout',
  template: '<a mat-button (click)="logout()">Logout</a>',
  styleUrls: ['./logout-button.component.scss']
})
export class LogoutButtonComponent implements OnInit {

  constructor(private store$: Store<RootStoreState.RootState>) { }

  ngOnInit() {
  }

  logout() {
    this.store$.dispatch(AuthenticationActions.LogoutAction());
  }

}
