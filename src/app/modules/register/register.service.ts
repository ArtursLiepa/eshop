import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../Interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  registerURL = 'http://localhost:3000/user/register';

  register(
    name: string,
    surname: string,
    age: number,
    email: string,
    username: string,
    password: string,
  ) {
    return this.http.post<User>(this.registerURL, {
      name,
      surname,
      age,
      email,
      username,
      password,
    });
  }
}
