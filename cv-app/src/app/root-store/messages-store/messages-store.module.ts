import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer as messageReducer } from './message-reducer';
import { reducer as usersReducer } from './user-messages.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MessagesStoreEffect } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('messages', messageReducer),
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([MessagesStoreEffect])
  ],
  providers: [MessagesStoreEffect]
})
export class MessagesStoreModule { }
