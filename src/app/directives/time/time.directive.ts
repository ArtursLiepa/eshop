import { Directive, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appTime]',
  standalone: false,
})
export class TimeDirective {
  Hours: any;
  Minutes: any;
  Seconds: any;
  // targetEl: HTMLElement;

  constructor(el: ElementRef) {
    const targetEl: HTMLElement = el.nativeElement;

    targetEl.textContent = `Under construction!!`;
  }
}
