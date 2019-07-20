import { createAction, props } from '@ngrx/store';
import { ILoginForm } from 'src/app/models/login-form';
import { FormGroupState } from 'ngrx-forms';

export const ValueSubmittedAction = createAction('[LoginForm] Submit Value Requested',
props<{ submittedValue: FormGroupState<ILoginForm> }>());

export const LoggedInSuccesfullAction = createAction('[LoginForm] Submit Value Succesful',
props<{ token: any }>());

export const LoginFailedAction = createAction('[LoginForm] Submit Value Failure',
props<{ errorMessage: string }>());

export const LogoutAction = createAction('[Authentication] Logout');
