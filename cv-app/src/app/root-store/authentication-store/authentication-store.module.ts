import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { loginFormReducer, reducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginStoreEffects } from './effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('login', loginFormReducer),
    StoreModule.forFeature('authentication', reducer),
    EffectsModule.forFeature([LoginStoreEffects])
  ],
  providers: [LoginStoreEffects]
})
export class AuthenticationStoreModule { }
