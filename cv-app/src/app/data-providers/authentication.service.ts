import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenResult } from '../models/token-result';
import { map } from 'rxjs/operators';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private readonly http: HttpClient, private config: AppConfigService) {}
  post(email: string, password: string): Observable<TokenResult> {
    const apiUrl =  this.config.getConfig().apiUrl + 'auth/login';

    return this.http.post(apiUrl, { email, password }).pipe(
      map<any, TokenResult>(TokenResult.adapt)
    );
  }
}
