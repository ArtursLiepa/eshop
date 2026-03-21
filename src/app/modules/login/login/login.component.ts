import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Output() loginExit = new EventEmitter();

  constructor(public authService: AuthService) {}

  closeloginForm() {
    this.loginExit.emit();
  }
}
