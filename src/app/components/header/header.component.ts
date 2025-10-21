import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  date = new Date();

  Hours: any;
  Minutes: any;
  Seconds: any;

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
}
