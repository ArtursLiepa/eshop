import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../modules/login/login/auth.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  @Output() authStatus = new EventEmitter<boolean>();

  loginModuleActivated: boolean = false;
  status: boolean;

  constructor(public authService: AuthService) {}

  logIn() {
    this.loginModuleActivated = true;
  }

  logOut() {
    this.loginModuleActivated = false;
    this.authService.logout();
    if (this.authService.isLoggedOut) {
      this.status = false;
      this.authStatus.emit(this.status);
      console.log('Headar isLoggedOut worked!');
    }
  }

  disableLoginModule() {
    this.loginModuleActivated = false;
    if (this.authService.isLoggedIn) {
      this.status = true;
      this.authStatus.emit(this.status);
      console.log('Headar isLoggedIn worked!');
    }
  }

  ngOnInit(): void {}
}
