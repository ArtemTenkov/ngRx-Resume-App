import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account';
import { map } from 'rxjs/operators';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private readonly http: HttpClient, private config: AppConfigService) { }

  get(email: string): Observable<Account> {
    const apiUrl = this.config.getConfig().apiUrl + 'account';

    return this.http.get(`${apiUrl}?email=${email}`).pipe(
      map<any, Account>(Account.adapt)
    );
  }
}
