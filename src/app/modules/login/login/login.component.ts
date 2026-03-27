import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { AuthResponse } from '../../../Interfaces/authentication';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  tokenExist: boolean = false;
  token: string = '';

  @Output() loginExit = new EventEmitter<boolean>();
  @Output() userLogeIn = new EventEmitter();

  constructor(public authService: AuthService) {}

  closeloginForm() {
    this.loginExit.emit();
  }

  authForm = new FormGroup({
    username: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  get username() {
    return this.authForm.controls.username;
  }

  get password() {
    return this.authForm.controls.password;
  }

  login() {
    this.authService
      .authenticate(this.username.value, this.password.value)
      .subscribe((token) => ((this.token = token), this.loginExit.emit()));
  }

  ngOnInit(): void {}
}
