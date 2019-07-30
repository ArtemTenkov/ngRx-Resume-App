import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { map } from 'rxjs/operators';
import { AppConfigService } from './app-config.service';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private readonly http: HttpClient, private config: AppConfigService) { }

  userList(): Observable<Account[]> {
    const graphQlUrl = this.config.getConfig().graphQlUrl;
    const query = `{
      users {
        id, email, profileImage, role, userName
      }
    }`;

    return this.http.post(`${graphQlUrl}`, { query }).pipe(
      map<any, Account[]>(data => data.data.users.map(Account.adapt))
    );
  }

  getMessages(userEmail: string): Observable<Message[]> {
    const graphQlUrl = this.config.getConfig().graphQlUrl;
    const query = `query ($userEmail: String){
      user(userEmail: $userEmail) {
        id,
        userName,
        role,
        email,
        messages{
          id, text, sendDate
        }
      }
    } `;

    return this.http.post(`${graphQlUrl}`, { query, variables: {
      userEmail
    } }).pipe(
      map<any, Message[]>(data => {
        const flattenedMessages = data.data.user.map(user => {
          return user.messages.map(message => Message.adapt(message, user));
        });

        return [].concat(...flattenedMessages);
      } )
    );
  }
}
