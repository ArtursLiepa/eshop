import { inject, Injectable } from '@angular/core';
import { User } from '../../../../Interfaces/user';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../login/login/auth.service';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  // private userUrl = 'http://localhost:3000/user';
  private authService = inject(AuthService);

  getUser(): Observable<User> {
    console.log('Account service getUser method called!');
    // const tokenAuth = localStorage.getItem('token');
    const tokenAuth = this.authService.tokenA;
    console.log(tokenAuth);
    const options = {
      headers: new HttpHeaders({ Authorization: `Bearer ${tokenAuth}` }),
    };
    console.log(options);

    return this.http.get<User>(`${environment.apiUrl}/user`, options).pipe(
      map((item) => {
        return {
          name: item.name,
          surname: item.surname,
          age: item.age,
          email: item.email,
          username: item.username,
          password: item.password,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        };
      }),
    );
  }

  constructor() {}
}
