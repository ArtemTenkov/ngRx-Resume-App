import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '../models/root-url';
import { AuthenticationStoreState } from './authentication-store';
import { AccountStoreState } from './account-store';


export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

export interface RootState extends State {
  authentication: AuthenticationStoreState.State;
  account: AccountStoreState.State;
}
