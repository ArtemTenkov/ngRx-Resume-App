import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { ILoginForm } from 'src/app/models/login-form';

export const initialLoginFormValue = createFormGroupState<ILoginForm>('authenticationForm', {
  email : 'user',
  password : 'password',
});

export interface State {
  loginFormState: FormGroupState<ILoginForm>;
}

export const initialState: State = {
  loginFormState: initialLoginFormValue
};




