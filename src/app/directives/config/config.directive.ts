import { Directive, Inject, ElementRef } from '@angular/core';
import { AppConfig, APP_CONFIG, appSettings } from '../../Interfaces/Config';

@Directive({
  selector: '[appConfig]',
  standalone: false,
  providers: [{ provide: APP_CONFIG, useValue: appSettings }],
})
export class ConfigDirective {
  config: AppConfig;

  constructor(@Inject(APP_CONFIG) config: AppConfig, el: ElementRef) {
    this.config = config;
    const targetE2: HTMLElement = el.nativeElement;

    targetE2.textContent = config.title;
  }
}
