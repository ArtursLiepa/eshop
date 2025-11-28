import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login() {
    console.log('You are trying to login mother fucker');
  }

  register() {
    console.log('You are trying to register mother fucker');
  }
}
