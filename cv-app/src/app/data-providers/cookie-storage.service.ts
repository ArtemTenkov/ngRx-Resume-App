import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { of, Observable } from 'rxjs';

const tokenId = 'token_id';

@Injectable({
  providedIn: 'root'
})
export class CookieStorageService {

  constructor() { }
  getTokenAsync(): Observable<string> {
    const cookie = Cookie.get(tokenId);
    return of(cookie);
  }

  getToken(): string {
    const cookie: any = Cookie.get(tokenId);
    return cookie;
  }

  setToken(value: string): void {
    Cookie.set(tokenId, value, 0.0138999);
  }

  deleteToken(): void {
    Cookie.delete(tokenId);
    const cookie = Cookie.get(tokenId);
  }
}
