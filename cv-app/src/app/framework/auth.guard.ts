// src/app/auth/services/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { of } from 'rxjs';
import { mergeMap, map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { RootStoreState, AuthenticationSelectors } from '../root-store';
import { CookieStorageService } from '../data-providers/cookie-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cookieStorage: CookieStorageService) {}

  canActivate() {
    return this.checkStoreAuthentication().pipe(
      mergeMap(storeAuth => {
        if (storeAuth !== null) {
          return of(true);
        }

        return of(false);
      }),
      map(storeOrApiAuth => {
        if (!storeOrApiAuth) {
          this.router.navigate(['/login']);
          return false;
        }

        return true;
      })
    );
  }

  checkStoreAuthentication() {
    return this.cookieStorage.getTokenAsync();
  }
}
