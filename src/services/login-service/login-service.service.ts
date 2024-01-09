import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoginServiceService {
  private host = 'https://shopbot.ngrok.io';

  constructor(private http: HttpClient) {}

  login(params: any): Observable<any> {
    return this.http.post(`${this.host}/user`, params)
  }
}
