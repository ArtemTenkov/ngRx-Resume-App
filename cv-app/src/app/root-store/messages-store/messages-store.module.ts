import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { MessagesStoreEffect } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('messages', reducer),
    EffectsModule.forFeature([MessagesStoreEffect])
  ],
  providers: [MessagesStoreEffect]
})
export class MessagesStoreModule { }
