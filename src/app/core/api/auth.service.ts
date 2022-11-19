import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  postRequest<T>(data: any): Observable<T> {
    return this.http.post<T>('https://dummyjson.com/auth/login', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
