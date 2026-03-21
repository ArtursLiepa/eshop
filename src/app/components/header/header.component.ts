import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../modules/login/login/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  loginModuleActivated: boolean = false;

  constructor(public authService: AuthService) {}

  enableLoginModule() {
    this.loginModuleActivated = true;
  }

  disableLoginModule() {
    this.loginModuleActivated = false;
    this.authService.logout();
  }

  // userloggedin() {
  //   if (this.authService.isLoggedIn) {

  //   }
  // }

  ngOnInit(): void {}
}
