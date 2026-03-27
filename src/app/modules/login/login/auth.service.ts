import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';
import { inject } from '@angular/core';
import { AuthResponse } from '../../../Interfaces/authentication';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = '';

  authURL = 'http://localhost:3000/auth/login';

  private http = inject(HttpClient);

  authenticate(username: string, password: string): Observable<string> {
    return this.http
      .post<string>(this.authURL, {
        username,
        password,
      })
      .pipe(tap((token) => (this.token = token)));
  }

  // login() {
  //   console.log('Worked!');
  // }

  logout() {
    console.log('Logout method worked!');
    this.token = '';
  }

  get isLoggedIn() {
    return this.token !== '';
  }

  get isLoggedOut() {
    return this.token === '';
  }
}
