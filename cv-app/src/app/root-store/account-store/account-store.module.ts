import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccountStoreEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('account', reducer),
    EffectsModule.forFeature([AccountStoreEffects])
  ],
  providers: [AccountStoreEffects]
})
export class AccountStoreModule { }
