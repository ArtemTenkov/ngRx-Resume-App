import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private apiUrl = environment.apiUrl + 'messages';
  constructor(private readonly http: HttpClient) { }

  list(email: string): Observable<Message[]> {
    return this.http.get(`${this.apiUrl}?userEmail=${email}`).pipe(
      map<any, Message[]>(data => data.map(Message.adapt))
    );
  }
}
