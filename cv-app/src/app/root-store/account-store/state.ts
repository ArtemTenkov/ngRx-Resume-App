import { Account  } from 'src/app/models/account';

export interface State {
  account?: Account;
}

export const initialState: State = {
  account: null
};


