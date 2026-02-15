import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string = '';

  authURL = 'http://localhost:3000/auth';

  private http = inject(HttpClient);

  // login(): Observable<string> {
  //   return this.http
  //     .post<string>(this.authURL, { username: 'Kārlis', password: '987654321' })
  //     .pipe(tap((token) => (this.token = token)));
  // }

  login() {
    console.log('Worked!');
  }

  logout() {
    console.log('Logout method worked!');
    this.token = '';
  }

  get isLoggedIn() {
    return this.token !== '';
  }
}
