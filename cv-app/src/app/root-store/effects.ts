import { AccountService } from 'src/app/data-providers/account.service';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { RouterStateModel } from '../models/root-url';
import { tap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

export class GlobalApplicationEffects {
  constructor(private actions$: Actions, private titleService: Title) { }

  updateTitleEffect = createEffect(() =>
  this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    tap((action: RouterNavigationAction<RouterStateModel>) => {
      this.titleService.setTitle(action.payload.routerState.title);
    })), {dispatch: false });
}
