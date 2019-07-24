import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { map } from 'rxjs/operators';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private readonly http: HttpClient, private config: AppConfigService) { }

  list(email: string): Observable<Message[]> {
    const apiUrl = this.config.getConfig().apiUrl + 'messages';

    return this.http.get(`${apiUrl}?userEmail=${email}`).pipe(
      map<any, Message[]>(data => data.map(Message.adapt))
    );
  }
}
