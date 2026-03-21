import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = '';

  authURL = 'http://localhost:3000/auth/login';

  private http = inject(HttpClient);

  login(): Observable<string> {
    return this.http
      .post<string>(this.authURL, {
        username: 'ivarsgaiss',
        password: '12345',
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
