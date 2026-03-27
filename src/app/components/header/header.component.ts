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

  activateLogInForm() {
    this.loginModuleActivated = true;
  }

  deactivateLogInForm() {
    this.loginModuleActivated = false;
    this.authService.logout();
  }

  disableLoginModule() {
    this.loginModuleActivated = false;
  }

  ngOnInit(): void {}
}
