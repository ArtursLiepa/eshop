import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  loginModuleActivated: boolean = false;

  enableLoginModule() {
    this.loginModuleActivated = true;
  }

  disableLoginModule() {
    this.loginModuleActivated = false;
  }

  ngOnInit(): void {}
}
