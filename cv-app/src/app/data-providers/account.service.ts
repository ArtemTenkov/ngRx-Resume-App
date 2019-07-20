import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = environment.apiUrl + 'account';

  constructor(private readonly http: HttpClient) { }
  get(email: string): Observable<Account> {
    return this.http.get(`${this.apiUrl}?email=${email}`).pipe(
      map<any, Account>(Account.adapt)
    );
  }
}
