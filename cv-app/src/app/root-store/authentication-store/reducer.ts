import * as loginActions from './actions';
import { initialState, State } from './state';
import { required, greaterThanOrEqualTo, lessThan, minLength } from 'ngrx-forms/validation';

import { Action, createReducer, on } from '@ngrx/store';
import { onNgrxForms, wrapReducerWithFormStateUpdate, onNgrxFormsAction, SetValueAction, updateGroup, validate } from 'ngrx-forms';
import { ILoginForm } from 'src/app/models/login-form';

export const loginReducerInitial = createReducer(
  initialState,

  // this function automatically calls the appropriate reducer
  // for all form states on the state
  onNgrxForms(),

  // use this to call a reducer for a specific ngrx-forms action;
  // note that this must be placed after onNgrxForms
  onNgrxFormsAction(SetValueAction, (state, action) => {
    if (action.controlId === 'authenticationForm.email') {
      // react to username changing...
      // action is of type SetValueAction
    }

    return state;
  }),
  // your other reducers...
);

export const validateLoginForm = updateGroup<ILoginForm>({
  email: validate(required, minLength(4)),
  password: validate(required)
  // other updates...
});

export const loginFormReducer = wrapReducerWithFormStateUpdate(
  loginReducerInitial,
  // point to the form state to update
  s => s.loginFormState,
  // this function is always called after the reducer
  validateLoginForm,
);

const authenticationReducer = createReducer(initialState);

export function reducer(state: State | undefined, action: Action) {
  return authenticationReducer(state, action);
}

