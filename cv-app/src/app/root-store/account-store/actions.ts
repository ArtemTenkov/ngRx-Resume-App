import { createAction, props } from '@ngrx/store';
import { Account  } from 'src/app/models/account';

export const AccountInfoFailedAction = createAction('[Account] Get Info Failure', props<{ errorMessage: string }>());
export const AccountInfoSuccessAction = createAction('[Account] Get Info Success', props<{ account: Account }>());
export const AccountInfoRequestedAction = createAction('[Account] Get Info', props<{ email: string }>());
