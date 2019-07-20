import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenResult } from '../models/token-result';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl =  environment.apiUrl + 'auth/login';

  constructor(private readonly http: HttpClient) {}
  post(email: string, password: string): Observable<TokenResult> {
    return this.http.post(this.apiUrl, { email, password }).pipe(
      map<any, TokenResult>(TokenResult.adapt)
    );
  }
}
