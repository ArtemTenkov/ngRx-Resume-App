import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store/root-store.module';
import { NgrxFormsModule } from 'ngrx-forms';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomRouterStateSerializer } from './models/root-url';
import { AuthenticationComponent } from './containers/login/authentication.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HttpClientModule} from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { LogoutButtonComponent } from './containers/logout-button/logout-button.component';
import { LandingComponent } from './components/landing/landing.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './data-providers/token.interceptor';
import { AccountComponent } from './containers/account/account.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalApplicationEffects } from './root-store/effects';
import { MessagesComponent } from './containers/messages/messages.component';
import { MessageComponent } from './components/message/message.component';
import { AppConfigService } from './data-providers/app-config.service';
import { MessageGroupComponent } from './components/message-group/message-group.component';
import { ChatUserComponent } from './components/chat-user/chat-user.component';

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginFormComponent,
    LogoutButtonComponent,
    LandingComponent,
    AccountComponent,
    MessagesComponent,
    MessageComponent,    
    MessageGroupComponent, ChatUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootStoreModule,
    NgrxFormsModule,

    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatCardModule,

    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([GlobalApplicationEffects]),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule
  ],
  providers: [ AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    },
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
