import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationStoreModule } from './authentication-store/authentication-store.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AccountStoreModule } from './account-store/account-store.module';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { MessagesStoreModule } from './messages-store/messages-store.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationStoreModule,
    StoreModule.forFeature('router', routerReducer),
    StoreModule.forRoot({}),
    StoreRouterConnectingModule.forRoot(),
    AccountStoreModule,
    MessagesStoreModule
  ]
})
export class RootStoreModule { }
