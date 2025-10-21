import { Injectable } from '@angular/core';
import { OurServices } from '../interfaces/our-services';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OurServicesService {
  constructor() {}
  private categories: OurServices[] = [
    { id: 1, name: 'Mounting' },
    { id: 2, name: 'Maintanace' },
    { id: 3, name: 'Montage' },
    { id: 4, name: 'Repair' },
  ];

  getServices(): Observable<OurServices[]> {
    return of(this.categories);
  }

  // private products: Product[] = [
  //   { id: 1, name: 'Computer', price: 250 },
  //   { id: 2, name: 'Micropohone', price: 150 },
  //   { id: 3, name: 'Keyboard', price: 2500 },
  //   { id: 4, name: 'Mouse', price: 2500 },
  //   { id: 5, name: 'Powerbanks', price: 2500 },
  // ];
}
