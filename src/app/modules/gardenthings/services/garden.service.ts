import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import {
  gardenThingCategory,
  Gardenthing,
  gardenThingSegment,
  gardenThingsSubSegment,
} from '../gardenthing';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GardenService {
  private http = inject(HttpClient);

  constructor() {}

  private gardencategorylistUrl = 'http://localhost:3000/gardenThingCategories';
  private gardensegmentlistUrl = 'http://localhost:3000/gardenThingSegments';

  getGardenThingCategoryList(): Observable<gardenThingCategory[]> {
    // return of(this.categories);
    return this.http
      .get<gardenThingCategory[]>(this.gardencategorylistUrl)
      .pipe(
        map((items) =>
          items.map((item) => {
            return {
              gardenThingCategoryID: item.gardenThingCategoryID,
              gardenthingCategoryName: item.gardenthingCategoryName,
            };
          })
        )
      );
  }

  getGardenThingSegmentList(name: string): Observable<gardenThingSegment[]> {
    // return of(this.categories);
    return this.http
      .get<gardenThingSegment[]>(
        `${this.gardensegmentlistUrl}?gardenthingCategoryName=${name}`
      )
      .pipe(
        map((items) =>
          items.map((item) => {
            return {
              gardenThingSegmentID: item.gardenThingSegmentID,
              gardenthingSegmentName: item.gardenthingSegmentName,
            };
          })
        )
      );
  }
}
