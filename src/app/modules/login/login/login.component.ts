import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // constructor(public authService: AuthService) {

  // }
  @Output() loginExit = new EventEmitter();

  closeloginForm() {
    this.loginExit.emit();
  }

  maessage: string = 'Login worked';
  style: string = 'color:#ef7c8e; font-size:22px; background:#fae8e0';

  login() {
    console.log(`%c${this.maessage}`, this.style);
  }

  logout() {
    console.log('Logout worked');
  }
}
