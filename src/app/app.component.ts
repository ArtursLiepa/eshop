import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'web';
  accessStatus: boolean = false;

  changeAuthStatus(actualStatus: boolean) {
    console.log(
      `App component enableAccount worked and grantAcces value before allowing is ${this.accessStatus}!`,
    );
    this.accessStatus = actualStatus;
    console.log(
      `App component enableAccount worked and grantAcces value after allowing is ${this.accessStatus}!`,
    );
  }

  constructor() {}
}
