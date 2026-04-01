import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../modules/login/login/auth.service';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit, OnChanges {
  date = new Date();
  Hours: any;
  Minutes: any;
  Seconds: any;
  isDisabled: boolean = true;

  @Input() access: boolean;

  constructor(public authservice: AuthService) {}

  localTimeHours = new Observable((observer) => {
    setInterval(() => {
      observer.next(new Date().getHours());
    }, 1000);
  });

  getlocalTimeHours() {
    return this.localTimeHours.subscribe((val: any) => {
      this.Hours = val;
    });
  }

  localTimeMinutes = new Observable((observer) => {
    setInterval(() => {
      observer.next(new Date().getUTCMinutes());
    }, 1000);
  });

  getlocalTimeMinutes() {
    return this.localTimeMinutes.subscribe((val: any) => {
      this.Minutes = val;
    });
  }

  localTimeSeconds = new Observable((observer) => {
    setInterval(() => {
      observer.next(new Date().getUTCSeconds());
    }, 1000);
  });

  getlocalTimeSeconds() {
    return this.localTimeSeconds.subscribe((val: any) => {
      this.Seconds = val;
    });
  }
  ngOnInit(): void {
    this.getlocalTimeHours();
    this.getlocalTimeMinutes();
    this.getlocalTimeSeconds();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const logged = changes['access'];
    console.log(`Nav component AccountGrantAccess ${this.isDisabled}`);
    if (logged.currentValue === true) {
      this.isDisabled = false;
      console.log(`Nav component AccountGrantAccess ${this.isDisabled}`);
    } else if (logged.currentValue === false) {
      this.isDisabled = true;
      console.log(`Nav component AccountGrantAccess ${this.isDisabled}`);
    }
  }
}
