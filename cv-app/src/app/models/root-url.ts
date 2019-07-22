import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface RouterStateModel {
  url: string;
  params: Params;
  queryParams: Params;
  title?: string;
}

export class CustomRouterStateSerializer
  implements RouterStateSerializer<RouterStateModel> {
  serialize(routerState: RouterStateSnapshot): RouterStateModel {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const params = route.params;
    const title = route.data['title'];
    return { url, params, queryParams, title };
  }
}
