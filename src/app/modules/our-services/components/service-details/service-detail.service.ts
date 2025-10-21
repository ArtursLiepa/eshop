import { Injectable } from '@angular/core';
import { OurServiceDetails } from '../../interfaces/our-service-details';
import { Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceDetailService {
  private serviceTypes: OurServiceDetails[] = [
    { id: 1, name: 'Mounting', detail: 'It s all about all', price: 250 },
    { id: 2, name: 'Maintanace', detail: 'It s all about all', price: 150 },
    { id: 4, name: 'Montage', detail: 'It s all about all', price: 2500 },
    { id: 5, name: 'Repair', detail: 'It s all about all', price: 2500 },
  ];

  constructor() {}

  getService(name: String): Observable<OurServiceDetails> {
    return of(this.serviceTypes).pipe(
      map((items) => items.find((item) => item.name == name))
    );
  }
}
